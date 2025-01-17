import Link from 'next/link'
import CustomButton from '../CustomButton'

const AuthBtns = () => {
  return (
    <div className='hidden md:flex items-center gap-2'>
        <Link href='/login'>
          <button className='h-[3.625rem] px-14 font-medium rounded-md hover:bg-gray-100 transition'>Login</button>
        </Link>
        <Link href='/signup'>
          <CustomButton variant='outlined'>Sign up</CustomButton>
        </Link>
    </div>
  )
}

export default AuthBtns