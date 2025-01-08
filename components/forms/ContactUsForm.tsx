import CustomInput from '../CustomInput'
import CustomTextarea from '../CustomTextarea'
import CustomButton from '../CustomButton'

const ContactUsForm = () => {
  return (
    <form className='mt-12 mb-8 w-full max-w-[30.375rem] mx-auto px-4 md:px-0'>
        <div className="flex flex-col gap-6 w-full">
            <CustomInput required name="fullname" label="Full name" />
            <CustomInput type='email' required name="email" label="Email" />
            <CustomInput name="businessType" label="Business type" />
            <CustomInput required name="subject" label="Subject" />
            <CustomTextarea required name="message" label="Write your message" />
            <div className="hidden md:block">
                <CustomButton className='shadow-xl' size="lg">Send message</CustomButton>
            </div>
            <div className="md:hidden">
                <CustomButton className='shadow-xl'>Send message</CustomButton>
            </div>
        </div>
    </form>
  )
}

export default ContactUsForm