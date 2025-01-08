import Image from 'next/image'
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
    >
        <span className="sr-only">Dutiful</span>
        <Image
            src="/logo.png"
            alt="Dutiful Logo"
            width={100}
            height={54}
            className='object-cover max-md:w-[80px]'
        />
    </Link>
  )
}

export default Logo;