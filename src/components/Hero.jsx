import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <h1 className="text-[100px] uppercase ff_bebas text-center">
        hi, <br />i am Neha rai
      </h1>
      <p className="text-center text-[18px] font-normal text-[#C7C7C7] max-w-[900px] pb-10">
        I’m a front-end developer passionate about creating accessible and
        user-friendly websites. With expertise in modern frameworks, I deliver
        responsive and engaging web experiences tailored to your needs.
      </p>
      <div className="text-center pt-5">
        <button className="bg-[#D3E97A] py-3 px-10 rounded-full text-black font-bold uppercase hover:bg-transparent hover:text-[#D3E97A] border-[1px] border-transparent hover:border-[#D3E97A] transition-all duration-300 ease-in-out">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Hero;
