import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

const reviews = [
    {
        id: 1,
        name: "Adeola Fatoyinbo",
        comment: "Tomi does a great job as an hair stylist. I haven't  stopped coming back since I first patronized her.",
        rating: 4,
        image: "/reviewImage.png"
    },
    {
        id: 2,
        name: "Adeola Fatoyinbo",
        comment: "Perfecto! That’s my exclamation everytime I patronize Johnson. His works are nothing short of amazing.",
        rating: 5,
        image: "/reviewImage.png"
    },
    {
        id: 3,
        name: "Adeola Fatoyinbo",
        comment: "Perfecto! That’s my exclamation everytime I patronize Johnson. His works are nothing short of amazing.",
        rating: 5,
        image: "/reviewImage.png"
    },
]


const CollectReviews = () => {
  return (
    <section className="py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full h-full relative">
                <div className="w-full aspect-square md:size-[526px] bg-[radial-gradient(at_center,#7948BA,#BB3B9FD4)] rounded-full grid place-items-center blur-2xl opacity-35 max-md:absolute">
                    <div className="size-1/2 bg-white rounded-full" />
                </div>
                <div className="flex flex-col md:absolute top-0 md:top-1/2 md:-translate-y-1/2 w-full h-full gap-5">
                    {
                        reviews.map(({id, name, comment, rating, image}) => (
                            <article key={id} className={twMerge(
                                "bg-white rounded-lg p-5 border border-[#DFDFEF] shadow-md md:w-[60%] md:absolute", 
                                id === 1 && "md:top-0 md:-rotate-[15deg] z-[10]",
                                id === 2 && "md:top-1/2 md:-translate-y-1/2 md:right-0 md:rotate-[15deg] z-[9]",
                                id === 3 && "md:bottom-0 md:-rotate-[2.4deg",
                            )}>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={image}
                                        alt="User picture"
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                    <p className="text-lg font-medium">{name}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {
                                        Array.from({length: rating}).map((_, i) => (
                                            <FaStar key={i} className="text-[#FCC945] size-4 my-3 mb-6" />
                                        ))
                                    }
                                </div>
                                <p className="text-[#666666] text-sm">{comment}</p>
                            </article>
                        ))
                    }
                </div>
            </div>

            <div className="-order-1 lg:order-1 md:w-[80%] mx-auto lg:w-full lg:mx-0 flex flex-col justify-center gap-4 text-center lg:text-start">
                <h1 className='text-4xl font-semibold font-averia text-[#230B34]'>Collect reviews and ratings from customers</h1>
                <p className='md:text-xl text-[#383838]'>Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
            </div>
        </div>
    </section>
  )
}

export default CollectReviews