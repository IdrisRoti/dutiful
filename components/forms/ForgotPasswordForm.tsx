"use client"

import Link from 'next/link'

import { CgMail } from 'react-icons/cg'

import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'

const ForgotPasswordForm = () => {
  return (
    <form className='mt-12'>
        <div className="flex flex-col gap-6">
            <CustomInput required type='email' name="email" label='Email' icon={CgMail} />
            <div className="hidden md:block mt-5">
              <CustomButton className='shadow-xl' size="lg">Send email</CustomButton>
            </div>
            <div className="md:hidden mt-5">
              <CustomButton className='shadow-xl'>Send email</CustomButton>
            </div>
            <p className='text-[#A3B1BF] text-center'>Or <Link className='text-textPurple' href="/login">Log in</Link></p>
        </div>
    </form>
  )
}

export default ForgotPasswordForm