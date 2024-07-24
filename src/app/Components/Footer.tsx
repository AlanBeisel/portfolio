"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer: React.FC = () => {
 

  return (
    <footer className="bg-black py-8 min-w-full mt-16 bg-opacity-25" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2">
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <div className="mt-4 flex justify-center sm:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white w-8 h-8 hover:text-blue-500 transition duration-300"
                />
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white w-8 h-8 hover:text-gray-500 transition duration-300"
                />
              </a>
              <a href="https://wa.me/+543434595671">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white w-8 h-8 hover:text-green-500 transition duration-300"
                />
              </a>
            </div>
            <p className="mt-4 text-white text-xl">
              Copyright 2022. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
