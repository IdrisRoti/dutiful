import { Averia_Serif_Libre } from "next/font/google";

import ResetPasswordForm from "../forms/ResetPasswordForm";

const averiaSerifLibre = Averia_Serif_Libre({weight: ["700"], subsets: ["latin"]})

const ResetPassword = () => {
  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
      <h1 className={`${averiaSerifLibre.className} text-4xl mb-5`}>Reset password</h1>
      <h2 className='text-textGray mb-3'>Set your new password</h2>
      <ResetPasswordForm />
    </div>
  )
}

export default ResetPassword