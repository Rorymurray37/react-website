import React from "react";
import binaryTree from "../assets/binarytree.png";
import genetic from "../assets/genetic.jpeg";
import stockGraph from "../assets/stockgraph.png";
import atm from "../assets/atm.png";
import distributed from "../assets/distributed.jpeg";

const Projects = () => {
  const projects = [
    {
      img: genetic,
      title: "Genetic",
      desc: "Genetic Algorithm consisting of one point crossover, mutation and selection based on chromosone fitness.",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Rorymurray37/AI-Genetic/blob/main/GeneticAlgorithm.ipynb",
    },
    {
      img: binaryTree,
      title: "Binary Tree",
      desc: "Binary Classification Tree model built from scratch using python.",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Rorymurray37/MachineLearning/blob/main/Assignment2ML_DecsionTree.ipynb",
    },
    {
      img: distributed,
      title: "ATM",
      desc: "Java RMI Distrbuted Banking System that consists of a bank server and ATM client.",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Rorymurray37/Java/tree/main/RMI_Assignment",
    },
    {
      img: stockGraph,
      title: "CNN for stock trading",
      desc: "Final Year Project: CNN model used for stock market classification. Built in python.",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/Rorymurray37/FYP_CNN",
    },
  ]; 

  return (
    <section className="bg-primary text-white px-5 pb-10" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5 para">
            These are some of project some personal and some as part of my studies. Built with python, java, html.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10 p-5 about-acc rounded-2xl">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img className="imgProjects rounded-lg" src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary rounded-lg opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="projects container mx-auto p-5 about-acc rounded-2xl mt-10">
      <h4 className ="font-bold">Mixing</h4>
            <p className="pb-5">
              I also have an interest in electronic and techno music which resulted in me buying a 2nd hand set of dj decks...
            </p>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1583592235%3Fsecret_token%3Ds-UOajylKUqLD&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="soundcloud">
          <a href="https://soundcloud.com/user-473304283" title="Murray" target="_blank" className="soundcloudLink">Murray</a> 
          · 
          <a href="https://soundcloud.com/user-473304283/bien-joue/s-UOajylKUqLD" title="Bien joue" target="_blank" className="soundcloudLink">Bien joue</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
