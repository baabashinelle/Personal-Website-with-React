import React from "react";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import MobileLinks from "./MobileLinks";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const hamburgericon = (
    <CgMenu
      className="hamburger"
      size="38px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className="hamburger"
      size="38px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <div>
      {open ? closeIcon : hamburgericon}
      {open && (
        <MobileLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
}

export default MobileNav;
