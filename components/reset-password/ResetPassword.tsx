"use client"

import { motion } from "motion/react";

import ResetPasswordForm from "../forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ ease: "easeInOut", duration: .5 }}
      className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
      <h1 className="text-4xl mb-5 font-averia">Reset password</h1>
      <h2 className='text-textGray mb-3'>Set your new password</h2>
      <ResetPasswordForm />
    </motion.div>
  )
}

export default ResetPassword