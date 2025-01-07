import { IoMapOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { RiMailSendLine } from "react-icons/ri";

const contactInfoArr = [
  {
    id: 1,
    title: "Customer Support",
    content: "Please fill out the form below",
    icon: RiMailSendLine 
  },
  {
    id: 2,
    title: "Business address",
    content: "Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria",
    icon: IoMapOutline  
  },
  {
    id: 3,
    title: "Phone number",
    content: "+234 903 921 6724",
    icon: LiaPhoneVolumeSolid   
  },
]

const ContactInfoCards = () => {
  return (
    <section className='max-w-[75rem] mx-auto -mt-[4rem]'>
        <div className="grid grid-cols-3 gap-10">
            {
              contactInfoArr.map(({id, title, content, icon: Icon}) => (
                <article key={id} className="col-span-1 rounded-xl border border-[#EEEEFF] py-5 px-3 bg-white">
                  <div className="flex items-center w-full justify-center gap-5 text-[#1E1E4B]">
                    <Icon className="size-12" />
                    <h2 className="text-2xl">{title}</h2>
                  </div>
                  <p className="mt-5 text-lg text-[#656565] text-center">{content}</p>
                </article>
              ))
            }
        </div>
    </section>
  )
}

export default ContactInfoCards;