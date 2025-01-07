"use client"

import Link from "next/link";
import { useState } from "react";

import { BiCheck } from "react-icons/bi";

const Terms = () => {
    const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="flex items-center mt-4 gap-3 text-sm">
        {!isSelected ? (
            <button onClick={() => setIsSelected(true)} className="size-4 border-[2px] border-borderPurple rounded" />
        )
            : (
                <button onClick={() => setIsSelected(false)} className="size-4 border-[2px] border-borderPurple bg-borderPurple text-white rounded grid place-items-center">
                    <BiCheck />
                </button>
            )
         } 
        <div className="flex items-center gap-2">
            <p>I agree to Dutiful&apos;s</p>
            <Link className="text-borderPurple border-b-2 border-borderPurple pb-[1px]" href="#">terms and condition</Link>
        </div>
    </div>
  )
}

export default Terms;