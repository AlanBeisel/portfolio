"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faGitAlt, faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faMobileAlt,
  faUniversalAccess,
  faRocket,
  faUsers,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import Image from 'next/image';

interface SkillProps {
  icon: any;
  name: string;
  level: number;
}

const Skill: React.FC<SkillProps> = ({ icon, name, level }) => (
  <div className="flex flex-col items-center p-4 bg-purple-700 bg-opacity-40 m-4 rounded-lg shadow-lg">
    <FontAwesomeIcon icon={icon} className="text-5xl text-blue-300 mb-2" />
    <h5 className="text-lg font-semibold text-white mb-2">{name}</h5>
    <div className="w-full bg-purple-600  rounded-full h-2.5">
      <div
        className="bg-blue-300 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const skills: SkillProps[] = [
  { icon: faReact, name: "React & Next.js", level: 90 },
  { icon: faCode, name: "TypeScript", level: 70 },
  { icon: faCss3Alt, name: "CSS & Tailwind", level: 95 },
  { icon: faHtml5, name: "HTML5", level: 95 },
  { icon: faJs, name: "JavaScript (ES6+)", level: 70 },
  { icon: faMobileAlt, name: "Responsive Design", level: 90 },
  { icon: faGitAlt, name: "Git", level: 90 },
  { icon: faUniversalAccess, name: "Web Accessibility", level: 70 },
  { icon: faNodeJs, name: "Node.js", level: 50 },
  { icon: faRocket, name: "Performance Optimization", level: 75 },
  { icon: faUsers, name: "Teamwork", level: 95 },
  { icon: faComments, name: "Communication", level: 98 },
];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="text-blue-300 text-lg">
                Mi conjunto de habilidades técnicas para el desarrollo front-end
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <Skill key={index} {...skill} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image src={colorSharp} alt="sharp" className="background-image-left" />
    </section>
  );
};