import Link from "next/link"

const footerLinksArr = [
    {
        id: 1,
        heading: "Company",
        links: [
            {
                id: 1,
                label: "About",
                href: "#"
            },
            {
                id: 2,
                label: "Contact Us",
                href: "#"
            },
            {
                id: 3,
                label: "FAQs",
                href: "#"
            },
        ]
    },
    {
        id: 2,
        heading: "Quick Links",
        links: [
            {
                id: 1,
                label: "Find services",
                href: "#"
            },
            {
                id: 2,
                label: "Pricings & plans",
                href: "#"
            },
            {
                id: 3,
                label: "List your business",
                href: "#"
            },
        ]
    },
    {
        id: 3,
        heading: "Resources",
        links: [
            {
                id: 1,
                label: "Blog",
                href: "#"
            },
            {
                id: 2,
                label: "Affliate Program",
                href: "#"
            },
        ]
    },
    {
        id: 4,
        heading: "More from Dutiful",
        links: [
            {
                id: 1,
                label: "Dutiful Jobs",
                href: "#"
            },
        ]
    },
]

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-y-10 items-start">
        {
            footerLinksArr.map(({id, heading, links}) => (
                <div key={id} className="space-y-6 w-1/2 md:w-1/4">
                    <h4 className="md:text-xl text-white font-medium">{heading}</h4>
                    <div className="flex flex-col gap-2.5 text-sm md:text-base">
                        {
                            links.map(({id, label, href}) => (
                                <Link className="text-lightPurple hover:text-white transition" href={href} key={id}>
                                    {label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FooterLinks