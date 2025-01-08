import ContactInfoCards from "./ContactInfoCards"
import ContactUsForm from "../forms/ContactUsForm"

const Contact = () => {
  return (
    <div className='pt-[4rem] md:pt-[5.625rem]'>
        <section className='bg-primary h-[16.75rem] w-full pt-[2.875rem] text-center text-white'>
            <h1 className="text-4xl mb-4 mt-8 md:mt-12 font-averia">Get in touch</h1>
            <h2 className='text-[#EDDFFF] mb-3 w-[90%] mx-auto md:w-full md:mx-0'>We are here to support you throughout the process of getting your business listed.</h2>
        </section>
        <ContactInfoCards />
        <ContactUsForm />
    </div>
  )
}

export default Contact