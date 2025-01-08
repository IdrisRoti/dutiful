import Image from 'next/image'

const Hero = () => {
  return (
    <section className='md:h-[80vh] lg:h-screen 2xl:max-h-[634px]'>
        <div className="w-full h-full md:flex flex-col lg:flex-row gap-3 lg:gap-16 pt-10 md:pt-16 lg:pt-0">
            <div className="md:w-[80%] mx-auto lg:w-[45%] lg:mx-0 flex flex-col justify-center gap-4 text-center lg:text-start">
                <h1 className='text-4xl font-semibold font-averia text-[#230B34]'>List and grow your business with just few clicks</h1>
                <p className='md:text-xl text-[#383838]'>Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.</p>
            </div>

            <div className="lg:w-[55%] relative overflow-hidden h-full mt-10 md:mt-0">
              <div className="hidden md:block h-[70%] w-full bg-primary rounded-3xl absolute bottom-0 shadow-md" />
              <div className="w-screen md:w-[428px] h-[430px] md:h-[563px] md:absolute -bottom-5 left-1/2 md:-translate-x-1/2">
                <Image
                  src="/dashboard.png"
                  alt="Mobile screen showing business overview on dashboard"
                  fill
                  className='object-cover'
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero