import Image from "next/image";

const Appointments = () => {
  return (
    <section className="py-20">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="relative w-full md:w-[70%] mx-auto lg:mx-0 lg:w-full h-[321px] md:h-[421px] lg:h-[471px]">
                <Image
                    src="/calender.png"
                    alt="Booking calender"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full mx-auto flex flex-col lg:pt-16 gap-4 text-center lg:text-start -order-1 lg:order-1">
                <h1 className='text-4xl font-semibold font-averia text-[#230B34]'>Accept and sell appointments</h1>
                <p className='md:text-xl text-[#383838]'>Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. </p>
            </div>
        </div>
    </section>
  )
}

export default Appointments