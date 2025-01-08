import Link from 'next/link'

import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'

const ResetPasswordForm = () => {
  return (
    <form className='mt-12'>
        <div className="flex flex-col gap-6">
            <CustomInput required name="password" label="Enter new password" type='password' />
            <CustomInput required name="confirmPassword" label="Re-enter new password" type="password" />
            <div className="hidden md:block mt-5">
              <CustomButton className='shadow-xl' size="lg">Reset password</CustomButton>
            </div>
            <div className="md:hidden mt-5">
              <CustomButton className='shadow-xl'>Reset password</CustomButton>
            </div>
            <p className='text-[#A3B1BF] text-center'>Or <Link className='text-textPurple' href="/signup">Create new account</Link></p>
        </div>
    </form>
  )
}

export default ResetPasswordForm;