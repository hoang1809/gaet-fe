"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../common/Container";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import { HeaderMenuMoile } from "./HeaderMenuMoile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = usePathname() === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isHomePage
          ? scrolled
            ? "fixed bg-gaet-700"
            : "fixed bg-transparent"
          : "sticky bg-gaet-700"
      } transition-all duration-300 flex items-center justify-between top-0 right-0 z-30 w-full`}
    >
      <Container
        className={`flex items-center justify-between space-y-0 gap-6 ${
          isHomePage ? (scrolled ? "py-6" : "py-6") : "py-4"
        }`}
      >
        <Link href="/">
          <img
            src="/assets/logos/logo_GAET_transparent.png"
            alt="GAET Logo"
            className={cn(
              "transition-all duration-300",
              isHomePage
                ? scrolled
                  ? "max-w-[4.5rem]"
                  : "max-w-[9rem]"
                : "max-w-[4.5rem]"
            )}
          />
        </Link>

        <div className="hidden lg:block">
          <HeaderNavigationMenu />
        </div>

        <div className="lg:hidden">
          <HeaderMenuMoile />
        </div>
      </Container>
    </div>
  );
};

export default Header;
