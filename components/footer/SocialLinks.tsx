import Link from "next/link"

import { BiLogoFacebook } from "react-icons/bi"
import { FaApple, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { IoLogoGooglePlaystore } from "react-icons/io5"

const socialLinksArr = [
    {
        id: 1,
        icon: BiLogoFacebook,
        href: "https://web.facebook.com/"
    },
    {
        id: 2,
        icon: FaInstagram,
        href: "https://www.instagram.com/"
    },
    {
        id: 3,
        icon: FaTwitter,
        href: "https://x.com/"
    },
    {
        id: 4,
        icon: FaYoutube,
        href: "https://www.youtube.com/"
    },
    {
        id: 5,
        icon: FaLinkedin,
        href: "https://www.linkedin.com/"
    },
]

const appDonloadLinks = [
    {
        id: 1,
        icon: FaApple,
        href: "https://www.apple.com/store"
    },
    {
        id: 2,
        icon: IoLogoGooglePlaystore,
        href: "https://play.google.com/store/"
    },
]


const SocialLinks = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center gap-y-3'>
        <div className="flex items-center gap-5">
            <h4 className=' text-white font-medium text-sm md:text-base'>Follow us</h4>
            <div className="flex items-center gap-3 md:gap-5">
                {
                    socialLinksArr.map(({id, href, icon: Icon}) => (
                        <Link href={href} target="_blank" key={id} className="size-9 grid place-items-center hover:scale-110 hover:opacity-70 transition duration-500">
                            <Icon className="text-white size-6" />
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className="flex items-center gap-5">
        <h4 className=' text-white font-medium text-sm md:text-base'>Download the app</h4>
            <div className="flex items-center gap-3 md:gap-5">
                {
                    appDonloadLinks.map(({id, href, icon: Icon}) => (
                        <Link href={href} target="_blank" key={id} className="size-9 grid place-items-center hover:scale-110 hover:opacity-70 transition duration-500">
                            <Icon className="text-white size-6" />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SocialLinks