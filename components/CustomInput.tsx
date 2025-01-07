"use client"

import { useState } from "react";

import { IconType } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface ICustomInput {  
    name: string;
    label: string;
    icon?: IconType;
    type?: "text" | "password";
}

const CustomInput = ({ name, label, icon, type="text" }: ICustomInput) => {
  const [inputType, setInputType] = useState(type)

    const Icon = icon as IconType;

  return (
    <div>
        <label htmlFor={name} className="text-textPurple font-medium md:text-xl mb-2">{label}</label>
        <div className="flex relative h-[3.5rem] w-full bg-[#F8FAFD] rounded-md overflow-hidden">
            <input type={inputType} id={name} className="w-full h-full px-3 rounded-md bg-transparent outline-none border-[2px] border-[#E7EAF1] focus:border-primary transition-all" />
            {icon && <Icon className="text-[#A16AE8] size-6 absolute z-10 right-3 top-1/2 -translate-y-1/2" />}
            {type === "password" && !icon && (
              <div className="">
                {
                  inputType === "text" ? (
                    <button type="button" onClick={() => setInputType("password")}><FaRegEyeSlash className="text-[#A16AE8] size-6 absolute z-10 right-3 top-1/2 -translate-y-1/2" /></button>
                  ) : (
                    <button type="button" onClick={() => setInputType("text")}><FaRegEye className="text-[#A16AE8] size-6 absolute z-10 right-3 top-1/2 -translate-y-1/2" /></button>
                  )
                }
              </div>
            )}
        </div>
    </div>
  )
}

export default CustomInput