import { Percent } from 'lucide-react';
import React from 'react'
const education = [
    {
      degree: "Bachelor of Technology(B.Tech)",
      institution: "Lovely Professional University",
      CGPA: "7.43 / 10",
      year: "2022-2026",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (11th-12th) ",
      institution: "Shiv Jyoti Public School",
      CGPA: "88.2%",
      year: "2020-2022",
      description: "Sharpened analytical skills in Physics, Chemistry, and Maths for engineering.",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "Shiv Jyoti Public School",
      CGPA: "89.8%",
      year: "2020",
      description: "Built a strong academic foundation, setting my course for science.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Data Structures and Algorithm",
      company: "Code Help",
      year: "2025",
      skills: ["C++", "Problem Solving"],
      description: "Developed and optimized problem solving skills by learning DSA",
      icon: <a href='https://drive.google.com/file/d/1I6Ks-lABio8ai2RWtQxy0d7LgRou5wkw/view?usp=sharing' target='blank'>🔗</a>,
    },
    {
      role: "Generative AI",
      company: "UpGrad",
      year: "2025",
      skills: ["AI", "Prompt Engineering"],
      description: "Learned prompt engineering and building with Generative AI.",
      icon: <a href='https://drive.google.com/file/d/1act0CnGVdTx7FQV4y-tXu6iSz6DSrZsP/view?usp=drive_link' target='blank'>🔗</a>,
    },
    {
      role: "Computer Networking",
      company: "Coursera",
      year: "2024",
      skills: ["Networking", "Internet Protocols"],
      description: "Learned about the five layers of networking and key internet protocols.",
      icon: <a href='https://www.coursera.org/account/accomplishments/verify/ZH5R5BTVYFGB' target='blank'>🔗</a>,
    },
    
    
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Certificates</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.CGPA}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Certificates</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.skills.join(', ')}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
