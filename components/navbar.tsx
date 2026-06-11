import { NavigationMenuList } from "@base-ui/react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: 'my-journey' },
]
const NavItems = () => {
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}



const Navbar = () => {
    return (
        <nav className="navbar" >
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
            </div>
        </nav>
    )
}

export default Navbar