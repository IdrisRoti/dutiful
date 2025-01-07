import { Averia_Serif_Libre } from "next/font/google"
import LoginForm from "../forms/LoginForm"

const averiaSerifLibre = Averia_Serif_Libre({weight: ["700"], subsets: ["latin"]})

const LogIn = () => {
  return (
    <div className='pt-[5rem] md:pt-[7rem] pb-[5rem] w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
      <h2 className='text-textGray mb-3'>Jump right back in</h2>
      <h1 className={`${averiaSerifLibre.className} text-4xl`}>Login</h1>
      <LoginForm />
    </div>
  )
}

export default LogIn