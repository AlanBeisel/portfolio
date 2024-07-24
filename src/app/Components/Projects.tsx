import React from "react";
import Image from "next/image";
import Chily from "../../assets/img/Chily.png"
import techno from "../../assets/img/techno.png"

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}


export const Projects: React.FC = () => {
  return (
    <section id="projects" className=" projects">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 m-8">
          <div className="bg-black bg-opacity-25 border-2 border-purple-700 rounded-3xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-opacity-50">
            <Image
              src={Chily}
              alt="Chily"
              width={400}
              height={300}
              className="w-full h-48 p-2 rounded-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Donde Chily</h3>
              <p className="text-white mb-4">
                App para pedidos por delivery a restaurante
              </p>
              <a
                href="https://lo.de-chily.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-700 font-bold"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
          <div className="bg-black bg-opacity-25 border-2 border-purple-700 rounded-3xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-opacity-50">
            <Image
              src={techno}
              alt="Techno"
              width={400}
              height={300}
              className="w-full h-48 p-2 rounded-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Techno e commerce</h3>
              <p className="text-white mb-4">
                E commerce de productos tecnologicos hecho en bootcamp de Henry
              </p>
              <a
                href="https://github.com/AlanBeisel/Proyecto-E-Commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-700 font-bold"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
