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
import { blackSansa } from "../../app/fonts";

export default function Navbar({ className }: SimpleProps) {
    const path = usePathname();
    const [isOpen, setOpen] = useState(false);
    const navRef = useRef<HTMLElement>();

    useEffect(() => {
        function clickHandler(e: MouseEvent) {
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
                "flex flex-col justify-between gap-8 transition-all p-[70px]",
                className,
                {
                    "-left-full md:left-0": !isOpen
                },
            )}>
                <ul className={cn("flex flex-col text-[20px] gap-[52px] w-full text-tony-yellow uppercase", blackSansa.className)}>
                    <li>
                        <Link href="/" className={cn("hover:font-bold", { "text-tony-red": path === '/' })}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={cn("hover:font-bold", { "text-tony-red": path === '/projects' })}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/writing" className={cn("hover:font-bold", { "text-tony-red": path === '/writing' })}>
                            Writing
                        </Link>
                    </li>
                    <li>
                        <Link href="/Tony Nguyen CV 2023.pdf" className={cn("hover:font-bold")}>
                            CV
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col gap-4">
                    <li>
                        <svg width="103" height="127" viewBox="0 0 103 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.7067 12.9062C52.4715 12.8573 49.2262 12.2011 45.1764 12.5393C45.6782 8.28651 44.9597 4.79197 44.9238 4.62394L44.6571 3.35842L43.3409 3.48497C43.0959 3.50837 37.7865 4.05073 32.9006 6.92953C30.7646 3.34353 28.167 1.02624 27.9831 0.864596L27 0L26.0169 0.864596C25.833 1.02624 23.2354 3.34353 21.0994 6.92953C16.2135 4.05073 10.9041 3.50943 10.6591 3.48497L9.34293 3.35842L9.07621 4.62394C9.04137 4.79197 8.32176 8.28651 8.82364 12.5393C4.7738 12.2022 1.52849 12.8573 1.29333 12.9073L0 13.1784L0.139349 14.4631C0.183985 14.8768 1.32164 24.6394 8.36422 29.6238C13.4886 33.2503 19.2443 34 23.1265 34C24.8455 34 26.1977 33.8532 26.963 33.7437C26.975 33.7437 26.988 33.7448 27 33.7448C27.012 33.7448 27.025 33.7426 27.037 33.7426C27.8023 33.8522 29.1534 34 30.8735 34C34.7546 34 40.5114 33.2503 45.6358 29.6238C52.6784 24.6394 53.816 14.8768 53.8606 14.4631L54 13.1784L52.7067 12.9073V12.9062ZM42.2457 6.55732C42.409 7.98555 42.5527 10.3826 42.151 12.9753C39.9791 13.4315 37.7375 14.2387 35.7093 15.5999C35.6103 13.405 35.03 11.3461 34.2266 9.50311C37.191 7.71118 40.4494 6.89656 42.2457 6.55732ZM11.7521 6.55732C13.5495 6.89656 16.8079 7.71118 19.7713 9.50311C18.9689 11.3461 18.3876 13.405 18.2885 15.5999C16.2603 14.2387 14.0187 13.4326 11.8469 12.9753C11.4451 10.3815 11.5888 7.98449 11.7521 6.55732ZM10.0876 27.297C5.52824 24.0704 3.83972 18.1608 3.29321 15.5085C6.04536 15.1905 12.3183 14.9151 16.8776 18.1406C17.4459 18.5436 17.9935 18.9807 18.5128 19.4422C19.2857 24.5533 21.7755 28.5987 23.7634 31.1223C20.3352 31.2084 14.8744 30.6841 10.0876 27.297ZM26.9978 30.4576C24.8695 28.0542 21.2116 22.9506 21.2116 16.2657C21.2116 10.7644 25.1231 5.96071 27 3.97204C28.878 5.9554 32.7852 10.7442 32.7852 16.2657C32.7852 22.9506 29.1273 28.0542 26.9989 30.4576H26.9978ZM43.9081 27.297C39.1212 30.6852 33.6605 31.2084 30.2322 31.1223C32.2201 28.5976 34.711 24.5522 35.4829 19.4422C36.0022 18.9807 36.5498 18.5436 37.1181 18.1416C41.6785 14.9151 47.9525 15.1905 50.7035 15.5085C50.1559 18.1618 48.4674 24.0704 43.9092 27.297H43.9081Z" fill="#FF4A22" />
                            <path d="M22.8854 54V59.5C21.2292 59.2 18.0674 58.65 14.8554 58.55C14.6547 62.35 14.4539 67.35 14.4539 69.9V73.1C14.4539 77.05 14.9056 86.9 15.2569 89H7.62847C7.97978 86.9 8.43147 77.05 8.43147 73.1V69.9C8.43147 67.35 8.23072 62.35 8.02997 58.55C4.81798 58.65 1.65618 59.2 0 59.5V54H22.8854Z" fill="#EFA920" />
                            <path d="M37.0794 89C30.0532 89 24.382 82.9 24.382 71.05C24.382 59.35 30.0532 54 37.0794 54C44.0554 54 49.7266 59.35 49.7266 71.05C49.7266 82.9 44.0554 89 37.0794 89ZM37.0794 84.5C40.6427 84.5 43.5034 81.3 43.5034 71.05C43.5034 60.95 40.6427 58.5 37.0794 58.5C33.4659 58.5 30.6052 60.95 30.6052 71.05C30.6052 81.3 33.4659 84.5 37.0794 84.5Z" fill="#EFA920" />
                            <path d="M76.26 69.9V73.1C76.26 77.05 76.7117 86.9 77.063 89H69.4345C69.7858 86.9 70.2375 77.05 70.2375 73.1V57.6L59.2967 89H52.4712C52.8225 86.9 53.2742 77.05 53.2742 73.1V69.9C53.2742 65.95 52.8225 56.1 52.4712 54H60.0997C59.7484 56.1 59.2967 65.95 59.2967 69.9V85.25L70.2375 54H77.063C76.7117 56.1 76.26 65.95 76.26 69.9Z" fill="#EFA920" />
                            <path d="M98.7341 62.8L93.2135 75.9V89H87.191V76.2L78.8097 54H86.3378C86.4884 55.6 87.7933 60.05 89.0479 63.85L91.0554 69.1L91.9086 67.05L91.8082 67.2C93.615 63.25 96.0742 56.1 96.3753 54H97.379L97.4292 54.05V54H103C102.046 55.45 100.29 59.3 98.7341 62.8Z" fill="#EFA920" />
                            <path d="M15.9532 107.6V109.733C15.9532 112.367 16.2561 118.933 16.4917 120.333H11.3759C11.6115 118.933 11.9144 112.367 11.9144 109.733V99.4L4.57729 120.333H0C0.235596 118.933 0.538504 112.367 0.538504 109.733V107.6C0.538504 104.967 0.235596 98.4 0 97H5.11579C4.8802 98.4 4.57729 104.967 4.57729 107.6V117.833L11.9144 97H16.4917C16.2561 98.4 15.9532 104.967 15.9532 107.6Z" fill="#EFA920" />
                            <path d="M34.3231 103.133V106.133L29.6112 104.367C31.4623 105.6 32.8422 107.733 32.8422 110.867C32.8422 115.367 30.0824 118.033 27.1542 118.8L32.4383 120.167C32.4383 124.333 29.3756 127 25.5724 127C22.0384 127 19.245 125.233 18.2016 120.8H22.7116C23.4184 123.4 24.8656 124 26.3465 124C27.7601 124 29.4765 123.1 29.2746 120.033L25.3704 119C21.8365 118.967 17.9997 116.2 17.9997 110.867C17.9997 105.833 21.5673 103.367 24.9666 103.133H34.3231ZM25.4378 115.967C27.2215 115.967 28.7024 114.267 28.7024 110.867C28.7024 107.533 27.2215 106.133 25.4378 106.133C23.6203 106.133 22.1731 107.533 22.1731 110.867C22.1731 114.267 23.6203 115.967 25.4378 115.967Z" fill="#EFA920" />
                            <path d="M45.3288 103.667L50.4445 103.133C50.2426 104.367 49.9734 107.233 49.906 111.733C49.9734 116.233 50.2426 119.1 50.4445 120.333H45.8673V116.133C45.0932 118.967 43.3767 120.333 40.9198 120.333C37.7897 120.333 35.9049 118.6 35.8713 113.767C35.8713 108.1 35.5684 105.067 35.3328 103.667L40.4486 103.133C40.213 104.467 39.9437 107.7 39.9101 112.867C39.9774 116.4 41.2227 117.333 42.4343 117.333C44.1508 117.333 45.699 115.967 45.8673 112.333C45.7999 107.8 45.5307 104.9 45.3288 103.667Z" fill="#EFA920" />
                            <path d="M68.5783 108.867C68.5783 114.9 66.7272 118.733 63.7991 120.167H67.7706C67.7706 124.333 64.7078 127 60.9046 127C57.3707 127 54.5772 125.233 53.8031 121.6H58.3131C58.7843 123.6 60.1978 124 61.6787 124C63.0923 124 64.6742 123.1 64.6068 120.833H60.77C56.0581 120.833 52.928 116.767 52.928 108.867C52.928 106.8 52.6924 105.067 52.4568 103.667L57.5726 103.133C57.4044 104.133 57.2024 106.167 57.1014 109.3C57.1688 115.8 58.414 117.833 60.77 117.833C63.1596 117.833 64.4049 115.7 64.4049 108.867C64.4049 106.8 64.1693 105.067 63.9337 103.667L69.0495 103.133C68.8139 104.533 68.5783 107.733 68.5783 108.867Z" fill="#EFA920" />
                            <path d="M80.9213 113.733H85.9025C85.162 118.4 81.4262 120.767 78.3298 120.767C74.7958 120.767 70.8917 117.7 70.8917 111.733C70.8917 105.867 74.7958 103.133 78.3298 103.133C81.3589 103.133 85.0274 105.167 85.8688 109.533C85.9025 109.6 85.9025 109.667 85.9025 109.733H75.1997C75.0987 110.333 75.0651 110.967 75.0651 111.733C75.0651 115.9 76.5123 117.733 78.3298 117.733C78.599 117.733 78.8683 117.7 79.1375 117.6C80.8877 116.933 81.1233 114.3 80.9213 113.733ZM78.3298 106.133C76.9835 106.133 75.8392 106.967 75.3343 109.067H80.955C80.9213 108.133 80.4501 106.633 79.0366 106.233C78.801 106.167 78.5654 106.133 78.3298 106.133Z" fill="#EFA920" />
                            <path d="M102.461 109.733C102.461 115.4 102.764 118.933 103 120.333H97.8842C98.1198 118.933 98.4227 115.4 98.4227 110.9C98.4227 107.1 97.1438 106.133 95.8985 106.133C94.2156 106.133 92.7011 107.433 92.4992 110.833C92.4992 111.133 92.4992 111.433 92.4655 111.733C92.5328 116.233 92.8021 119.1 93.004 120.333H87.8882C88.0902 119.133 88.3594 116.367 88.3931 112C88.3594 107.633 88.0902 104.867 87.8882 103.667L93.004 103.133C92.903 103.833 92.7684 105.033 92.6674 106.733C93.5089 104.3 95.1244 103.133 97.413 103.133C100.543 103.133 102.428 104.867 102.461 109.733Z" fill="#EFA920" />
                        </svg>

                    </li>


                    <li className="flex flex-row gap-4 items-center ">
                        <Link href={'https://www.instagram.com/tonyxln/'} className="text-tony-red hover:text-tony-yellow">
                            <InstagramLogo className="w-5 h-5" />
                        </Link>

                        <Link href={'https://slantedpress.com/user/tony'} className="text-tony-red hover:text-tony-yellow">
                            <SlantedPressLogo className="w-5 h-5" />
                        </Link>
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