import Link from "next/link"

import { CiSearch } from "react-icons/ci"

export const navlinks = [
    {
        id: 1,
        label: "Business Directory",
        href: "#"
    },
    {
        id: 2,
        label: "Features",
        href: "#"
    },
    {
        id: 3,
        label: "Pricing",
        href: "/pricing"
    },
    {
        id: 4,
        label: "Blog",
        href: "#"
    },
]

const NavMenu = () => {
  return (
    <div className="hidden lg:flex h-full items-center gap-5">
        <span className="size-10 grid place-items-center"><CiSearch className="size-8 text-textPurple" /></span>
        <nav className="flex h-full items-center gap-2.5">
            {
                navlinks.map(({id, label, href}) => {

                    return (
                        <Link 
                            className="h-full px-4 flex items-center text-lg text-textGray hover:text-textPurple transition"
                            href={href}
                            key={id}>
                                {label}
                        </Link>
                    )
                })
            }
        </nav>
    </div>
  )
}

export default NavMenu