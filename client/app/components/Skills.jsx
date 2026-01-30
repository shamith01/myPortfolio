import React from "react";

function Skills() {
  const skills = [
    "Javascript",
    "React",
    "Nextjs",
    "Nodejs",
    "Docker",
    "Express",
    "Mongodb",
    "Redux/Toolkit",
  ];
  return (
    <div className="w-[70%] mx-auto ">
      <h2 className="my-8 text-lg font-bold">Skills</h2>
      <div>
        <div className="grid grid-cols-4 gap-5 ">
          {skills.map((v) => {
            return (
              <div className="rounded-md flex justify-center items-center bg-slate-900 w-[200px] h-[100px] text-white border-[#A15351] border-2">
                <h3>{v}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
