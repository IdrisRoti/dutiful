import Link from "next/link"

const links= [
    {
        id: 1,
        label: "Terms of services",
        href: "#"
    },
    {
        id: 2,
        label: "Privacy policy",
        href: "#"
    },
    {
        id: 3,
        label: "Disclaimer",
        href: "#"
    },
]

const Copyright = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-10 lg:gap-20'>
        <p className="text-white text-sm md:text-lg">© 2022 Dutiful®</p>
        <div className="flex items-center gap-4 md:gap-8">
            {
                links.map(({id, label, href}) => (
                    <Link className="text-lightPurple hover:text-white transition text-sm md:text-base" href={href} key={id}>
                        {label}
                    </Link>
                ))
            }            
        </div>
    </div>
  )
}

export default Copyright