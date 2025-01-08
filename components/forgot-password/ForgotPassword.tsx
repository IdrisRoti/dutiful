"use client"

import { useRouter } from "next/navigation"

import ForgotPasswordForm from "../forms/ForgotPasswordForm"

import { BsArrowLeft } from "react-icons/bs"
import { motion } from "motion/react"

const ForgotPassword = () => {
    const router = useRouter()

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ ease: "easeInOut", duration: .5 }} 
      className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
        <button onClick={() => router.back()} className="size-8 rounded-full border border-[#E5E7EA] grid place-items-center text-textPurple hover:bg-textPurple hover:text-white transition">
            <BsArrowLeft />
        </button>
        <h1 className="text-4xl mb-4 mt-8 md:mt-12 font-averia">Forgot password</h1>
        <h2 className='text-textGray mb-3'>Enter your email and we&apos;ll send you a mail on how to reset your 
        password.</h2>
        <ForgotPasswordForm />
    </motion.div>
  )
}

export default ForgotPassword