"use client"
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import Terms from '../signup/Terms';

const SignUpForm = () => {
  return (
    <form className='mt-16'>
        <div className="flex flex-col gap-6">
            <CustomInput name="fullname" label="Full name" />
            <CustomInput name="email" label="Email" />
            <CustomInput name="phone" label="Phone number" />
            <CustomInput name="password" label="Password" type='password' />
            <CustomInput name="confirmpassword" label="Re-enter password" type='password' />
            <Terms />
            <div className="hidden md:block">
              <CustomButton size="lg">Sign up</CustomButton>
            </div>
            <div className="md:hidden">
              <CustomButton>Sign up</CustomButton>
            </div>
        </div>
    </form>
  )
}

export default SignUpForm