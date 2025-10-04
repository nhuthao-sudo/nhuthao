import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo bên trái */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Navigation trải đều */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:underline">Profile</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
