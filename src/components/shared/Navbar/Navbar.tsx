
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import UserMenu from "./UserMenu";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

import MobileMenu from "./MobileMenu";


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
                        <UserMenu />
                        
                    </div>

                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}