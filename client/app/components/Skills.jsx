import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiJavascript ,SiMongodb,SiRedux,SiExpress,SiDocker,SiNodedotjs} from "react-icons/si";


function Skills() {
  const skills = [
    {logo:SiJavascript,name:"Javascript"},
    {logo:TbBrandNextjs ,name:"Nextjs"},
    {logo:FaReact ,name:"React"},
    {logo:SiNodedotjs,name:"Nodejs"},
    {logo:SiDocker,name:"Docker"},
    {logo:SiExpress,name:"Express"},
    {logo:SiMongodb,name:"Mongodb"},
    {logo:SiRedux,name:"Redux/Toolkit"},
  ];
  return (
    <div className="w-[70%] mx-auto ">
      <h2 className="my-8 text-xl  font-bold">Skills</h2>
      <div>
        <div className="grid grid-cols-3 gap-5 ">
          {skills.map((v) => {
            const Icon=v.logo;
            return (
              <div className="rounded-md flex gap-3 justify-center items-center bg-slate-900 w-75 h-25 text-white border-[#A15351] border-2">
                <Icon size={28}/>
                <h3>{v.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
