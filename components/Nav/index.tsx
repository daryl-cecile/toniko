"use client";

import Link from "next/link";
import LogoMark from "../../public/logo-mark-filled.svg";
import SlantedPressLogo from "../../public/slantedpress.svg";
import InstagramLogo from "../../public/instagram.svg";
import MenuIcon from "../../public/menu.svg";
import { SimpleProps } from "../../utils/base";
import { cn } from "../../utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ className }: SimpleProps) {
    const path = usePathname();
    const [isOpen, setOpen] = useState(false);
    const navRef = useRef<HTMLElement>();

    useEffect(() => {
        function clickHandler(e:MouseEvent) {
            if (!isOpen) return;
            if (!navRef.current?.contains(e.target as HTMLElement)) {
                setOpen(false);
            }
            if (navRef.current?.contains(e.target as HTMLElement) && e.target instanceof HTMLAnchorElement) {
                setOpen(false);
            }
        }

        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [isOpen]);

    return (
        <>
            <nav ref={navRef} className={cn(
                "flex flex-col items-center justify-center gap-8 transition-all", 
                className,
                {
                    "-left-full md:left-0": !isOpen
                },
            )}>
                <ul>
                    <li>
                        <Link href="/" className={cn({ "text-fire-orange": path === '/' })}>
                            <LogoMark className="w-28 mt-4"/>
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col items-center justify-center gap-4 text-white">
                    <li>
                        <Link href="/about" className={cn("hover:font-bold", { "text-fire-red": path === '/about' })}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/writing" className={cn("hover:font-bold", { "text-fire-red": path === '/writing' })}>
                            Writing
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos" className={cn("hover:font-bold", { "text-fire-red": path === '/videos' })}>
                            Videos
                        </Link>
                    </li>
                    <li>
                        <Link href="/Tony Nguyen CV 2023.pdf" className={cn("hover:font-bold")}>
                            CV
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col gap-4">
                    <li className="flex flex-row gap-4 text-center items-center justify-center">
                        <Link href={'https://slantedpress.com/user/tony'} className="text-white hover:text-fire-orange">
                            <SlantedPressLogo className="w-5 h-5" />
                        </Link>

                        <Link href={'https://www.instagram.com/tonyxln/'} className="text-white hover:text-fire-orange">
                            <InstagramLogo className="w-5 h-5" />
                        </Link>
                    </li>
                    <li>
                        <span className="text-xs text-gray-400">Copyright &copy; {new Date().getFullYear()}</span>
                    </li>
                </ul>
            </nav>
            <button onClick={() => setOpen(r => !r)} className="fixed top-2 right-2 flex md:hidden content-center items-center p-2 hover:text-fire-orange">
                <MenuIcon className={cn("w-5 h-5 text-inherit", {
                    "text-fire-orange": isOpen
                })} />
            </button>
        </>
    )
}