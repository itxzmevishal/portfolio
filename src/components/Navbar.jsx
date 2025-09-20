import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = "/Resume.pdf";
    window.open(resumeUrl);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-primary py-3 px-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[20px] font-bold cursor-pointer flex">
          VISHAL <span className="sm:block hidden">&nbsp;SANAP</span>
        </p>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden sm:flex gap-6 items-center">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-white text-[20px] font-medium hover:text-secondary"
            >
              {link.title}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleResume}
            className="text-white text-[20px] font-medium hover:text-secondary"
          >
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="sm:hidden relative z-[110]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-8 h-8 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-primary p-6 flex flex-col gap-6 shadow-lg transition-transform duration-300 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white text-[20px] font-medium hover:text-secondary"
              onClick={() => setToggle(false)}
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={toggleResume}
            className="text-white text-[20px] font-medium hover:text-secondary mt-4"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
