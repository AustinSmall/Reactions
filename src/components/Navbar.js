import React from "react";

export default function Navbar() {
  return (
    <header className="bg-red-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Austin Small
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 hover:text-black">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-black">
            Skills
          </a>
        <a
          href="#contact"
          className="inline-flex text-white items-center border-0 py-1 px-3 focus:outline-none hover:text-black mt-4 md:mt-0">
          Contact Me
        </a>
        </nav>
      </div>
    </header>
  );
}
