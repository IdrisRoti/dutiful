import UserType from "./UserType";
import SignUpForm from "../forms/SignUpForm";

const SignUp = () => {
  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
      <h2 className='text-textGray mb-3'>Sign up for free</h2>
      <h1 className="text-4xl font-averia">Get started</h1>
      <UserType />
      <SignUpForm />
    </div>
  )
}

export default SignUp