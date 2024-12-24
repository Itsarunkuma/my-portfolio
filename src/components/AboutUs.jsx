import React from "react";

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
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.
            </h4>
            <p className="mb-5">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>
            <a href="">More about me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
