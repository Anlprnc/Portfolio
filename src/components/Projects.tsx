const Projects = () => {
  return (
    <div id="projects" className="flex w-full justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="mt-4 space-y-6">
          <h2 className="text-2xl text-white">Projects</h2>
          <div className="space-y-1.5 border-b border-dashed border-gray-500 pb-4">
            <h3 className="text-lg text-emerald-400">Food Recipes | January 2025</h3>
            <h4 className="text-sky-500">Full Stack | Next.js, PostgreSQL, Prisma, NextAuth</h4>
            <p className="font-exo-italic text-yellow-300">
              This recipe-sharing website is a full-stack web application built with Next.js, Prisma, PostgreSQL, and NextAuth. Only the admin can add and edit recipes, while users
              can create an account to view and filter recipes by category. Secure authentication is provided with NextAuth, and the admin panel allows easy recipe management. With
              its responsive design, the platform ensures a smooth experience on all devices.
            </p>
            <a href="https://github.com/Anlprnc/Food-Recipes" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
              Github
            </a>
          </div>
          <div className="border-b border-dashed border-gray-500 pb-4">
            <h3 className="text-lg text-emerald-400">Dashboard | February 2025</h3>
            <h4 className="text-sky-500">Frontend | Next.js</h4>
            <p className="font-exo-italic text-yellow-300">
              This dashboard website is a frontend application developed for Carbon Solutions. Built with Next.js and TailwindCSS, it offers a modern and fast user experience. It
              includes login and register pages for user authentication. The dashboard features event management, reports, and various analytics sections. With a clean and elegant
              design, it provides an efficient way to display data.
            </p>
            <a href="https://github.com/Anlprnc/Dashboard/tree/main" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
              Github
            </a>
          </div>
          <div className="space-y-1.5 border-b border-dashed border-gray-500 pb-4">
            <h3 className="text-lg text-emerald-400">Photo Store | January 2024</h3>
            <h4 className="text-sky-500">Full Stack | Next.js</h4>
            <p className="font-exo-italic text-yellow-300">
              This project is a user-friendly platform where you can upload your photos, mark them as favorites, and manage your collection with ease. It includes authentication
              features to ensure secure access and personalized usage, making it perfect for organizing and safeguarding your photo library.
            </p>
            <a href="https://photo-store-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
              Demo
            </a>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg text-emerald-400">Travel Agency | April 2024</h3>
            <h4 className="text-sky-500">Full Stack | ASP.NET Core MVC, MSSQL</h4>
            <p className="font-exo-italic text-yellow-300">
              This travel agency website is a web application built with ASP.NET MVC and MSSQL. Users can register, log in, and explore various travel packages. The admin dashboard
              allows managing travel packages, reservations, and users. With MSSQL, it ensures efficient data management, while the MVC structure provides a clean and scalable
              architecture.
            </p>
            <a href="https://github.com/Anlprnc/VenturaTravel-MVC-Project" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
