import Link from "next/link";

type NavItem = {
    id: string;
    path: string;
    label: string;
};

const navItems: NavItem[] = [
    { id: "home01", path: "/", label: "Home" },
    { id: "about02", path: "/about", label: "About" },
    { id: "ministries03", path: "/ministries", label: "Ministries" },
    { id: "events04", path: "/events", label: "Events" },
    { id: "contact05", path: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full shadow-md h-16 z-50 bg-[#fbf9f5]/90 backdrop-blur-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-12 h-full">
                {/*Logo*/}
                <div>
                    <span className="text-3xl font-bold">AGOM</span>
                </div>

                {/*Nav Links*/}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.path}
                            className="text-[#44474D] hover:text-[#d4af37] tracking-wide"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/*Button*/}
                <button className="rounded-full bg-[#E9C349] px-6 py-2 hover:bg-[#FFE088] transition-colors cursor-pointer">
                    Join Us
                </button>
            </div>
        </nav>
    );
}
