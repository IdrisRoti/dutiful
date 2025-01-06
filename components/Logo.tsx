import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <span className="sr-only">Dutiful</span>
        <Image
            src="/logo.png"
            alt="Dutiful Logo"
            width={120}
            height={54}
            className='object-cover max-md:w-[80px]'
        />
    </div>
  )
}

export default Logo