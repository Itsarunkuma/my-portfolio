import React from "react";

const ProjectsCard = ({ obj }) => {
  return (
    <div className="bg-[#1A1A1A] p-8 max-w-[480px] rounded-xl w-full border-[1px] border-transparent hover:border-[#D3E97A] transition-all duration-300 ease-in-out">
      <img className="rounded-xl w-full" src={obj.imgurl} alt="url" />
      <h3 className="pt-5 pb-3">AMRIN</h3>
      <p>React, tailwind</p>
      <a href={obj.link}>View link</a>
    </div>
  );
};

export default ProjectsCard;
