"use client"

import { useState } from "react"

import { twMerge } from "tailwind-merge"

import { FaRegUser } from "react-icons/fa"
import { GrBusinessService } from "react-icons/gr"
import {  IoMdCheckmark } from "react-icons/io"

const userTypes = [
    {
        label: "Regular User",
        value: "User",
        icon: FaRegUser
    },
    {
        label: "Service provider",
        value: "Service",
        icon: GrBusinessService
    },
] as const

const UserType = () => {
    const [selectedType, setSelectedType] = useState<"User" | "Service">("Service")
  return (
    <div className="flex items-center gap-5 mt-10">
        {
            userTypes.map(({label, icon: Icon, value}) => {
                const isSelected = selectedType === value;
                
                return (
                    <button 
                        key={label} 
                        className={twMerge("relative py-5 md:py-[1.875rem] px-3 md:px-5 rounded-xl border flex items-center gap-2 md:gap-6 justify-center", isSelected ? "border-primary" : "border-[#EEEEFF] hover:border-primary text-[#B1BDCA]")}
                        onClick={() => setSelectedType(value)} 
                    >
                            <Icon className="size-5 md:size-6" />
                            <span className="font-medium text-sm md:text-xl">{label}</span>
                            {isSelected && <div className="size-6 md:size-9 grid place-items-center bg-primary text-white rounded-full absolute -top-[12px] md:-top-[18px] -right-[12px] md:-right-[18px]"><IoMdCheckmark className="size-4" /> </div>}
                    </button>
                )
            })
        }
    </div>
  )
}

export default UserType