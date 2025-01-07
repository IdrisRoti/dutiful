"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

import CustomButton from "../CustomButton"
import { IoMdCheckmark } from "react-icons/io"

const EmailSent = () => {
  const router = useRouter()
  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
        <div className="w-full flex flex-col items-center">
            <div className="bg-[#F8F3FF] grid place-items-center size-[7rem] md:size-[8.5rem] rounded-full">
              <div className="size-14 md:size-20 relative">
                <Image
                    src="/Message.png"
                    alt="Mail icon"
                    fill
                    className="object-cover"
                />
                <div className="size-6 md:size-9 grid place-items-center bg-[#05FF0F] text-white rounded-full absolute -top-[6px] md:-top-[9px] -right-[6px] md:-right-[9px]"><IoMdCheckmark className="size-4" /> </div>
              </div>
            </div>
            <p className="text-center text-textGray mt-4 mb-5 md:w-[90%] md:mx-auto">An OTP code has been sent to segunsolaru@gmail.com. 
            Check your email to get the code</p>
            <div onClick={() => router.push("/reset-password")} className="hidden md:block mt-5 w-full">
              <CustomButton className='shadow-xl' size="lg">Next</CustomButton>
            </div>
            <div onClick={() => router.push("/reset-password")} className="md:hidden mt-5 w-full">
              <CustomButton className='shadow-xl'>Next</CustomButton>
            </div>
        </div>
    </div>
  )
}

export default EmailSent