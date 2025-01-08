import Link from 'next/link';

import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const LoginForm = () => {

  return (
    <form className='mt-12'>
        <div className="flex flex-col gap-6">
            <CustomInput type="email" required name="email" label="Email" />
            <CustomInput required name="password" label="Password" type="password" />
            <Link className='text-borderPurple ml-auto' href="/forgot-password">Forgot password</Link>
            <div className="hidden md:block mt-5">
              <CustomButton className='shadow-xl' size="lg">Log in</CustomButton>
            </div>
            <div className="md:hidden mt-5">
              <CustomButton className='shadow-xl'>Log in</CustomButton>
            </div>
            <p className='text-[#A3B1BF] text-center'>Don&apos;t have an account? <Link className='text-textPurple' href="/signup">Sign Up</Link></p>
        </div>
    </form>
  )
}

export default LoginForm