"use client";
import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  type LinkProps,
} from "@nextui-org/react";

function Links({ size }: { size: LinkProps["size"] }) {
  return (
    <>
      <NavbarItem>
        <Link color="foreground" href="#" size={size}>
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color="foreground"
          href="https://github.com/fitzk"
          size={size}
          target="_blank"
        >
          Github
        </Link>
      </NavbarItem>
    </>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">@fitzk Codes</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Links size="md" />
      </NavbarContent>
      <NavbarMenu>
        <Links size="lg" />
      </NavbarMenu>
    </Navbar>
  );
}
