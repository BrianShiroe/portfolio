// app/components/ui/Navbar.tsx
"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
}
