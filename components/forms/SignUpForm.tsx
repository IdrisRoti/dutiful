"use client"
import CustomInput from '../CustomInput';

const SignUpForm = () => {
  return (
    <form className='mt-16'>
        <div className="flex flex-col gap-6">
            <CustomInput name="fullname" label="Full name" />
            <CustomInput name="email" label="Email" />
            <CustomInput name="phone" label="Phone number" />
            <CustomInput name="password" label="Password" type='password' />
            <CustomInput name="confirmpassword" label="Re-enter password" type='password' />
        </div>
    </form>
  )
}

export default SignUpForm