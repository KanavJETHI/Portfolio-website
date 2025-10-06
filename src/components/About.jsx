

import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiDocker,
  DiMysql
} from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiNextdotjs
} from "react-icons/si";
import '../about_sec.css';

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-950 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">Professional Skillset</h2>
        
        {/* Tech Stack Grid Container */}
        <div className="tech-icons-grid">
          <div className="tech-icons">
            <CgCPlusPlus/> 
          </div>
          <div className="tech-icons">
            <DiJavascript1 />
          </div>
          <div className="tech-icons">
            <DiNodejs />
          </div>
          <div className="tech-icons">
            <DiReact />
          </div>
          <div className="tech-icons">
            <DiMongodb />
          </div>
          <div className="tech-icons">
            <SiExpress />
          </div>
          <div className="tech-icons">
            <SiTailwindcss />
          </div>
          <div className="tech-icons">
            <DiGit />
          </div>
          <div className="tech-icons">
            <SiPostman />
          </div>
          <div className="tech-icons">
            <SiNextdotjs />
          </div>
          <div className="tech-icons">
            <DiDocker />
          </div>
          <div className="tech-icons">
            <DiMysql />
          </div>
          
        </div>
      </div>
  
    </div>


  );
};

export default About;
