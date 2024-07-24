"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";


const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(!showContactInfo);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out 
                    ${scrolled ? "py-0 bg-[#121212] bg-opacity-85" : "py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="overflow-hidden ml-[-12rem]">
            <Link href="/" className="w-[9%]">
              <Image
                src={logo}
                alt="Logo"
                width={98}
                height={98}
                className="rounded-xl"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["home", "skills", "projects"].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className={`text-white text-lg font-normal tracking-wide transition-opacity duration-300
                    ${
                      activeLink === item
                        ? "opacity-100"
                        : "opacity-75 hover:opacity-100"
                    }`}
                onClick={() => onUpdateActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/alan-beisel-65803029b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full 
                      flex items-center justify-center border border-white border-opacity-50
                      hover:bg-white group transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
                />
              </a>
              <a
                href="https://github.com/AlanBeisel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full 
                      flex items-center justify-center border border-white border-opacity-50
                      hover:bg-white group transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
                />
              </a>
              <a
                href="mailto:eliaas.beisel@gmail.com"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full 
                      flex items-center justify-center border border-white border-opacity-50
                      hover:bg-white group transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
                />
              </a>
              <a
                href="https://wa.me/+543434595671"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full 
                      flex items-center justify-center border border-white border-opacity-50
                      hover:bg-white group transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white w-6 h-6 hover:text-green-500 transition duration-300"
                />
              </a>
            </div>
            <button
              onClick={handleContactClick}
              className="bg-transparent text-white border border-white px-8 py-4 text-lg font-bold
                                        hover:bg-white hover:text-[#121212] transition-all duration-300 ease-in-out
                                        relative overflow-hidden group"
            >
              <span className="relative z-10">Contactame</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </button>
          </div>
        </div>
      </nav>

      {showContactInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-black bg-opacity-85 p-8 rounded-3xl shadow-lg transform transition-all duration-500 ease-in-out scale-100 border-4 border-blue-800">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleContactClick}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <p className="mb-4">
              <FontAwesomeIcon icon={faPhone} className="mr-6" />
              +54 3434595671
            </p>

            <p className="mb-4">
              <FontAwesomeIcon icon={faGithub} className="mr-6" />
              <a
                href="https://github.com/AlanBeisel"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/AlanBeisel
              </a>
            </p>
            <p className="mb-4">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-6" />
              <a href="https://www.linkedin.com/in/alan-beisel-65803029b/">
                Linkedin
              </a>
            </p>
            <p className="mb-4">
              <a href="mailto:eliaas.beisel@gmail.com" className="mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-6" />
              </a>
              eliaas.beisel@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
