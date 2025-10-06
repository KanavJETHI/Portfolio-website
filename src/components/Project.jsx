import React from 'react'
import Pizza from '../assets2/img/project/pizza_delviery.png'
import Sudoku from '../assets2/img/project/sudoku_solver.png'
import Movie from '../assets2/img/project/imdb-clone.png'
import Shop from '../assets2/img/project/shopApp.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "Pizza Delivery",
          description:
            " A responsive pizza delivery landing page with a modern design, showcasing menu items and special offers.",
          techStack: ["HTML", "Tailwind CSS","Javascript" ],
          link: "https://pizza-delivery-virid.vercel.app/",
          github: 'https://github.com/KanavJETHI/Pizza-Delivery-Landing-Page',
          image: Pizza, // Replace with your project screenshot
        },
        {
          title: "Sudoku Solver",
          description:
            "Developed a Sudoku solver utilizing Data Structures and Algorithms with an efficient backtracking approach.",
          techStack: ["HTML", "CSS", "JavaScript"],
          link: "https://sudoku-solver-cyan-beta.vercel.app/",
          github: 'https://github.com/KanavJETHI/Sudoku_solver',
          image: Sudoku, // Replace with your project screenshot
        },
        {
          title: "Movie Review",
          description:
            " A movie review web application that allows users to browse and review movies with a sleek and user-friendly interface.",
          techStack: ["HTML", "CSS", "JavaScript"],
          link: "https://movie-review-blue.vercel.app/",
          github: 'https://github.com/KanavJETHI/Movie_review',
          image: Movie, // Replace with your project screenshot
        },
        {
          title: "Shop App",
          description:
            " Shop App is a user-friendly e-commerce platform that allows users to browse and search  products seamlessly.",
          techStack: ["HTML", "CSS", "JavaScript", "React"],
          link: "https://shop-app-bay.vercel.app/",
          github: 'https://github.com/KanavJETHI/ShopApp',
          image: Shop, // Replace with your project screenshot
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-10'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 '>
                    <img src={project.image} alt={project.title} className='w-full object-contain aspect-video h-48  px-3  rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project











