import React, { useState } from "react";
import { Github, Insta, LinkedIn } from "./common/Icons";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
emailjs.init("Favu_M3WNoYx1DWsg");
const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.name !== "" && formData.email !== "" && formData.message) {
      emailjs
        .send("service_r5iqxvf", "template_30cmnz9", formData)
        .then(toast("We will get in touch soon!"));
      setFormData(initialState);
    }
  };
  return (
    <div>
      <div
        className="container 2xl:max-w-[1140px] mx-auto py-16 mt-20 px-4"
        id="contact"
      >
        <div className="flex">
          <div className="w-full max-w-[500px]">
            <h2 className="text-[76px] uppercase ff_bebas ">Let’s connect</h2>
            <p>
              Say hello at
              <a href="">robertgarcia@gmail.com</a>
            </p>
            <p>
              For more info, here’s my
              <a href="">resume</a>
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/in/neha-rai-305155257/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/Itsarunkuma"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
              {/* <a href="" rel="noreferrer">
                <Insta />
              </a> */}
            </div>
          </div>
          <form className="w-full max-w-[600px]" onSubmit={onSubmitHandler}>
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#1A1A1A] px-3 sm:px-4 py-3 rounded-[4px] my-3"
              type="text"
              placeholder="Name"
              value={formData.name}
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#1A1A1A] px-3 sm:px-4 py-3 rounded-[4px] my-3"
              type="email"
              placeholder="Email"
              value={formData.email}
            />
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-[#1A1A1A] px-3 sm:px-4 py-3 rounded-[4px] my-3"
              name=""
              id=""
              placeholder="Message"
              value={formData.message}
            ></textarea>
            <button className="bg-[#D3E97A] py-3 px-10 rounded-full text-black font-bold uppercase hover:bg-transparent hover:text-[#D3E97A] border-[1px] border-transparent hover:border-[#D3E97A] transition-all duration-300 ease-in-out mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
