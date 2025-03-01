import React from "react";
import resume from "../assets/img/Neha_rai_resume.pdf";

const AboutUs = () => {
  return (
    <div>
      <div
        className="container mx-auto py-16 mt-20 px-4 2xl:max-w-[1140px]"
        id="about"
      >
        <div className="flex">
          <h2 className="text-[76px] uppercase ff_bebas w-full max-w-[400px]">
            About me
          </h2>
          <div className="w-full">
            <h4 className="text-[32px] mb-5">
              I am a passionate front-end developer with experience of 4 years.
            </h4>
            <p className="mb-5">
              I am a passionate front-end developer with expertise in ReactJS,
              Next.js, Vue.js, HTML, CSS, and Tailwind CSS. With a strong eye
              for design and performance, I craft intuitive and responsive web
              applications that enhance user experience. As the leader of
              Radialcode, I guide a team of talented developers, fostering
              innovation and collaboration. I also enjoy teaching HTML & CSS,
              helping aspiring developers build a solid foundation. My focus is
              on creating clean, maintainable code while optimizing for
              performance and scalability. Constantly learning and evolving, I
              stay updated with the latest trends in front-end development.
              Let's build something amazing together!"
            </p>
            <a
              className="text-black uppercase rounded-full bg-[#D3E97A] px-6 transition-all duration-300 ease-in-out hover:text-[#D3E97A] hover:bg-transparent border border-[#D3E97A] py-3 font-semibold mt-5 inline-block "
              href={resume}
              download={resume}
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
