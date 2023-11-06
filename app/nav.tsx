"use client";
import React from "react";
import {
  Chip,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import { useSharedContext } from "./context";

function GithubLink() {
  return (
    <Link className="flex" href="https://github.com/fitzk" target="_blank">
      <svg
        className="text-[#9368B7]"
        height={24}
        viewBox="0 0 24 24"
        width={24}
      >
        <path
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
      <div className="sm:hidden text-xl ml-4 mt-1 text-[#9368B7]">Github</div>
    </Link>
  );
}

function LinkedInLink() {
  return (
    <Link
      className="flex"
      href="https://www.linkedin.com/in/kayla-fitzsimmons/"
      target="_blank"
    >
      <svg
        className="text-[#9368B7]"
        fill="currentColor"
        height={24}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        width={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="none"
          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
        />
      </svg>
      <div className="sm:hidden text-xl ml-4 mt-1 text-[#9368B7]">LinkedIn</div>
    </Link>
  );
}

function HomeLink() {
  return (
    <Link className="hidden md:flex" color="foreground" href="#" size="md">
      Home
    </Link>
  );
}

export default function Nav() {
  const { user } = useSharedContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* gap-4 is default for ul but it moves the avatar to the right ~1rem too far */}
      <NavbarContent className="gap-0">
        <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden mr-3"
          />
        </NavbarItem>
        <NavbarBrand>
          <User
            avatarProps={{
              className: "mr-3",
              isBordered: true,
              name: undefined,
              src: user?.avatarUrl,
            }}
            classNames={{
              base: ["text-sm", "text-indigo-900", "font-mono"],
              wrapper: ["flex", "flex-col-reverse", "justify-items-center"],
            }}
            description={
              <div className="text-lg m-0 text-black font-semibold font-sans">
                Kayla Fitzsimmons
              </div>
            }
            name="Software Developer"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Chip
            classNames={{
              base: "hidden sm:flex bg-gradient-to-br from-[#9368B7] to-[#FF705A] delay-150 animate-jump animate-twice",
              content: "drop-shadow shadow-black text-white",
            }}
            variant="shadow"
          >
            Open to Work
          </Chip>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex align-items-center justify-content-center"
        justify="end"
      >
        <NavbarItem>
          <HomeLink />
        </NavbarItem>
        <NavbarItem>
          <GithubLink />
        </NavbarItem>
        <NavbarItem>
          <LinkedInLink />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <HomeLink />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <GithubLink />
        </NavbarMenuItem>
        <NavbarItem>
          <LinkedInLink />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
