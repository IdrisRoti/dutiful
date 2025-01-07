"use client"

import { Averia_Serif_Libre } from "next/font/google"

import { useRouter } from "next/navigation"

import ForgotPasswordForm from "../forms/ForgotPasswordForm"

import { BsArrowLeft } from "react-icons/bs"

const averiaSerifLibre = Averia_Serif_Libre({weight: ["700"], subsets: ["latin"]})

const ForgotPassword = () => {
    const router = useRouter()

  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
        <button onClick={() => router.back()} className="size-8 rounded-full border border-[#E5E7EA] grid place-items-center text-textPurple hover:bg-textPurple hover:text-white transition">
            <BsArrowLeft />
        </button>
        <h1 className={`${averiaSerifLibre.className} text-4xl mb-4 mt-8 md:mt-12`}>Forgot password</h1>
        <h2 className='text-textGray mb-3'>Enter your email and we&apos;ll send you a mail on how to reset your 
        password.</h2>
        <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPassword