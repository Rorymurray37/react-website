import React from "react";

import {
  AiFillMail,
  AiFillPhone
} from "react-icons/ai";


const Contact = () => {
  return (
    <section className="bg-primary px-4 text-white " id="contact">
      <div className="container mx-auto justify-center md:justify-between pb-10">
         <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              Contact </h2>

        <div className="row-span-1">
          <AiFillMail className="mx-auto" size={40}
           />{""}
           <h4 className=" text-center text-lg">murray.galway7@outlook.com</h4>
          <AiFillPhone className="mx-auto mt-10" size={40} 
          />{""}
           <h4 className="text-center text-lg">+353858405751</h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;