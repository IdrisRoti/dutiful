"use client"
import { FormEvent } from 'react';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import Terms from '../signup/Terms';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {

  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push("/login")
  }

  return (
    <form onSubmit={handleSubmit} className='mt-12'>
        <div className="flex flex-col gap-6">
            <CustomInput required name="fullname" label="Full name" />
            <CustomInput required name="email" label="Email" />
            <CustomInput required name="phone" label="Phone number" />
            <CustomInput required name="password" label="Password" type='password' />
            <CustomInput required name="confirmpassword" label="Re-enter password" type='password' />
            <Terms />
            <div className="hidden md:block">
              <CustomButton className='shadow-xl' size="lg">Sign up</CustomButton>
            </div>
            <div className="md:hidden">
              <CustomButton className='shadow-xl'>Sign up</CustomButton>
            </div>
        </div>
    </form>
  )
}

export default SignUpForm