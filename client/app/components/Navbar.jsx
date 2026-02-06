"use client"
import React,{useState} from "react";

function Navbar() {
    const[active,setActive]=useState("home");
  return (
    <div className="w-[80%] mx-auto py-4 mt-[2rem] text-[16px] flex justify-between">
      <div className="font-bold test-primary">Shamith</div>
      <div className="flex gap-17">
        <div onClick={()=>setActive("home")} className={`${active=="home"?"underline text-[#A15351]":null}   underline-offset-4 hover:cursor-pointer `}>
          Home
        </div>
        <div onClick={()=>setActive("skills")} className={`${active=="skills"?"underline text-[#A15351]":null}   underline-offset-4 hover:cursor-pointer `}>Skills</div>
        <div onClick={()=>setActive("projects")} className={`${active=="projects"?"underline text-[#A15351]":null}   underline-offset-4 hover:cursor-pointer `}>Projects</div>
        <div onClick={()=>setActive("contact")} className={`${active=="contact"?"underline text-[#A15351]":null}   underline-offset-4 hover:cursor-pointer `}>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
