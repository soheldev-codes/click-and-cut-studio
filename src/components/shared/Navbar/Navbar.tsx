import Link from "next/link";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";


import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import Button from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { HiOutlineUserCircle } from "react-icons/hi2";

export default function Navbar() {
    return (
        <header
            className="
    sticky top-0 z-50
    border-b border-zinc-200/50 dark:border-zinc-800/50
    bg-background/80
    backdrop-blur-xl
  "
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Left */}
                    <Logo />

                    {/* Center */}
                    <NavLinks />

                    {/* Right */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <ThemeToggle />

                        <Link href="/login">
                            <Button className="gap-2">
  <HiOutlineUserCircle className="text-lg" />
  Login
</Button>
                        </Link>
                    </div>

                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}