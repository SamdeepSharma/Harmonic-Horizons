"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 dark", className)}>
      <Menu setActive={setActive}>
 
        <HoveredLink href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/basic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses/advanced-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses/song-writing">Song-writing</HoveredLink>
            <HoveredLink href="/courses/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href={"/contact-us"}>
          <MenuItem setActive={setActive} active={active} item="Contact us" />
        </HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;