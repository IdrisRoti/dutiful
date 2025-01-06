import CustomButton from '../CustomButton'

const AuthBtns = () => {
  return (
    <div className='hidden md:flex items-center gap-2'>
        <button className='h-[3.625rem] px-14 font-medium rounded-md hover:bg-gray-100 transition'>Login</button>
        <CustomButton variant='outlined'>Sign up</CustomButton>
    </div>
  )
}

export default AuthBtns