import { useEffect, useState } from 'react';

const Hero = () => {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    import('/src/assets/resume.pdf')
      .then((module) => {
        setResumeUrl(module.default);
      })
      .catch((err) => console.error('PDF import hatası:', err));
  }, []);

  const handleDownloadResume = () => {
    if (!resumeUrl) {
      console.error('Resume URL henüz hazır değil');
      return;
    }

    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = 'Anil_Pirincci_Resume.pdf';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      })
      .catch((error) => console.error('Resume indirme hatası:', error));
  };

  return (
    <div className="w-full max-w-[1100px] flex items-start justify-center mx-auto px-4 pt-30 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full">
        <div className="flex flex-col items-start justify-center gap-3 mb-36 order-2 md:order-1">
          <span className="text-sm text-white opacity-70">Hi 👋🏻 I'm</span>
          <h1 className="text-6xl font-bold text-white">Anıl Pirinççi</h1>
          <h3 className="font-exo text-3xl text-emerald-500">Full Stack Developer</h3>
          <button onClick={handleDownloadResume} className="text-white font-bold bg-emerald-600 hover:bg-emerald-700 cursor-pointer p-2 rounded-full w-full" disabled={!resumeUrl}>
            Resume
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img src="/avatar.png" alt="avatar" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
