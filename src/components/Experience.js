import React, { useEffect, useRef, useState } from "react";
import Zoom from 'react-reveal/Zoom';

import {
  BsFillBriefcaseFill
} from "react-icons/bs";
import {
  FaUniversity
} from "react-icons/fa";

  const SampleComponent = ({ children }: SampleComponentProps) => {
    return (
      <div className='h-screen grid grid-cols-1 place-items-center'>
        <h1 className='bg-blue-700 p-20 rounded-xl text-white '>{children}</h1>
      </div>
    )
  }


  const Experience = () => {
  

  return (
      <section className="bg-primary px-4 text-white pt-20 pb-20" id="experience">
        <div className="container mx-auto md:justify-between">
          <h2 className="text-4xl pb-2 font-bold mb-5 border-b-[5px] w-[215px] border-indigo-600 ">
              Experience
          </h2>

          
          <Zoom>
            <BsFillBriefcaseFill className="mx-auto" size={70} />{" "}
            <div className="p-5 about-acc rounded-2xl mx-auto mt-10">
              <h3 className ="text-2xl pb-2">Risk Model Engineer</h3>
              <p className="font-bold"> NIBC Bank (November 2021-Current)</p>
              <p className ="pb-2"><span role="img">📍</span>  Den Haag, Netherlands</p>
              <ul class="list-disc pl-5">
                  <li>Worked within the Advanced Analytics team in which my responsibilities included the development, deployment and maintenance of internal risk models</li>
                  <li>Models included Retail IRB model, Retail Prepayment Model Tool, Active Management Tool and a Corporate Portfolio Management Tool</li>
                  <li>Followed Agile methodologies</li>
                  <li>Languages : Matlab, Python, SQL </li>
                  <li>Tech : Azure Dev Ops, Matlab Production Servers, Microsoft SQL Server Management</li>
              </ul>
            </div>
          </Zoom>
          <Zoom>
            <div className="p-5 about-acc rounded-2xl mx-auto mt-10">
              <h3 className ="text-2xl">Software Developer Intern</h3>
              <p className="font-bold"> Irish Life (Jan - August 2020)</p>
              <p className ="pb-2"><span role="img">📍</span>  Dublin, Ireland</p>
              <ul class="list-disc pl-5">
                  <li>Worked within a team of 13 working mainly on the upgrade of in-house policy management system.</li>
                  <li>Responsibilities included running batches to test code changes, writing various powershell testing scripts, writing and executing sql queries and debugging c# programs.</li>
                  <li>Followed Agile methodologies</li>
                  <li>Languages : C#, Cobol, SQL </li>
              </ul>
            </div>
          </Zoom>

          <Zoom>
            <FaUniversity className="mx-auto mt-10" size={70} />{" "}

            <div className="p-5 about-acc rounded-2xl mx-auto mt-10">
              <h3 className ="text-2xl">Bachelor of Computer Science</h3>
              <p className="font-bold">University of Galway (September 2017 - September 2021)</p>
              <p className ="pb-2"><span role="img">📍</span>  Galway, Ireland</p>
              <ul class="list-disc pl-5">
                  <li>Second Class Honours Grade 1</li>
              </ul>
            </div>
          </Zoom>
        </div>
      </section>
  );
};

export default Experience;