"use client";
import React, { useState, useEffect, useRef } from "react";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import headerImg from "../../assets/img/header-img.svg";
import perfil2 from "../../assets/img/perfil2.jpg";

const toRotate = ["Desarrollador front end"];

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    if (showMore) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMore]);

  const handleClickOutside = (event: MouseEvent) => {
    if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
      setShowMore(false);
    }
  };

  const handleScroll = () => {
    setShowMore(false);
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <div className="flex">
                  <Image
                    src={perfil2}
                    alt="Perfil"
                    height={300}
                    width={300}
                    className="rounded-xl mb-12"
                  />
                  <div>
                    <div className="m-4">
                      Hola, soy Alan
                      <br />
                    </div>
                    <span className="inline-block py-1 px-3 text-2xl font-semibold bg-blue-500 text-white rounded-full m-4 tagline">
                      Bienvenidos a mi Portfolio
                    </span>
                  </div>
                </div>
                <span className="text-blue-500">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="text-lg mb-8">
                Soy un apasionado de la música y el arte. Esta pasión creativa
                es lo que me llevó a elegir el desarrollo frontend, donde creo
                que juega un papel importante la capacidad de ser creativo para
                crear y encontrar las mejores soluciones. Me destaco por mi
                buena comunicación y me gusta mucho trabajar en equipo.
              </p>
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
              >
                Más sobre mí{" "}
                <FontAwesomeIcon
                  icon={showMore ? faTimes : faArrowRight}
                  className="ml-2 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="animate-zoomIn banner">
              <Image src={headerImg} alt="Header Img" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed right- top-36 rounded-3xl h-4/5 w-1/3 bg-black bg-opacity-70 border-4 border-violet-600 text-white transition-transform duration-300 transform ${
          showMore ? "right-20 translate-x-0" : "right-0 translate-x-full"
        }`}
      >
        <div className="p-8 m-8">
          <h2 className="text-2xl font-bold mb-4">Más sobre mí😁</h2>
          <p className="mb-4">
            Mi nombre es Alan Elias, tengo 28 años y soy de Paraná, Entre Ríos,
            Artgentina. Hace un año aproximadamente me animé a arrancar la
            carrera en desarrollo web, siempre fue algo que me gustó y admiré
            desde muy chico. Me gusta la tecnología y mantenerme actualizado. Me
            gusta el frontend por la creatividad que exige y me apasiona una
            buena UI/UX.😊
          </p>
          <p className="mb-4">
            Actualmente, estoy desarrollando proyectos usando tecnologías como
            React, Next.js, TypeScript y Tailwind CSS. Tengo experiencia en la
            creación de interfaces de usuario atractivas y responsivas.
          </p>
          <p className="mb-4">
            He trabajado en varios proyectos recientes, incluyendo una
            aplicación de comercio electrónico con filtros de productos, gestión
            de usuarios y administración de roles. También he desarrollado una
            página de administración con autenticación y manejo de cuentas de
            administrador.
          </p>
          <p className="mb-4">
            Para mejorar mis habilidades, he tomado el curso en Henry de full
            stack. soy graduado con orientacion front end y estoy siempre
            buscando aprender nuevas tecnologías y mejores prácticas.
          </p>
          <p className="mb-4">
            Mi objetivo profesional es seguir creciendo como desarrollador
            frontend, contribuir a proyectos innovadores y eventualmente liderar
            un equipo de desarrollo para crear productos impactantes.
          </p>
          <p className="mb-8">
            Además del desarrollo web, disfruto de la música y el arte. Estos
            intereses alimentan mi creatividad y me inspiran a crear interfaces
            de usuario visualmente atractivas.
          </p>
        </div>
      </div>
    </section>
  );
};
