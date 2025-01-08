import Image from "next/image"
import { twMerge } from "tailwind-merge"

const benefits = [
    {
        id: 1,
        title: "Get Discovered",
        content: "Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEO techniques to boost each listing’s performance in the SERPs, providing any business the chance to rank, regardless of how strong their current online presence is.",
        iconUrl: "/discover.png" 
    },
    {
        id: 2,
        title: "Instant Chat",
        content: "You’ll be able to chat and send voice recordings with potential and existing customers, including managing your captured leads anytime, anywhere via the platform.",
        iconUrl: "/chat.png" 
    },
    {
        id: 3,
        title: "Quotations",
        content: "In addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you’ll be able to send and receive quotation from customers - an important step in lead management.",
        iconUrl: "/note.png" 
    },
]

const Benefits = () => {
  return (
    <section className='bg-[#FCFAFF] rounded-3xl px-5 md:px-10 py-10 md:py-16'>
        <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full h-[40rem] relative overflow-hidden">
                <div className='w-full h-[80%] bg-primary rounded-3xl absolute top-1/2 -translate-y-1/2' />
                <div className="absolute w-[850px] md:w-[850px] h-[652px] md:h-[652px] bottom-[5%] -left-[40%] md:-left-[10%]">
                    <Image
                        src="/listing-mockup.png"
                        alt="Mobile device mockup showing listings"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full space-y-5 z-10">
                {
                    benefits.map(({id, title, content, iconUrl}) => (
                        <article key={id} className={twMerge("bg-white rounded-3xl p-5 shadow-md border border-[#EEEEFF]", id === 2 && "lg:-ml-[12%]")}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={iconUrl}
                                    alt="icon"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                                <h3 className="text-[#464646] font-semibold text-xl">{title}</h3>
                                <p className="text-[#464646] text-sm md:text-base">{content}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Benefits