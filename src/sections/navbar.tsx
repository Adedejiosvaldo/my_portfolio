import React from "react";
import HamburgerMenu from "../assets/menu.svg";
const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Joseph
          </a>

          <button>
            <img src={HamburgerMenu} alt="hamburger menu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
