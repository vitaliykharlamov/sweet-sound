import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoSearch, IoToggle, IoToggleOutline } from "react-icons/io5";

const links = [
  { name: "Home", href: "/", icon: <IoHome className="w-8 h-8" /> },
  { name: "Search", href: "/search", icon: <IoSearch className="w-8 h-8" /> },
];

export const Sidebar = (props) => {
  return (
    <aside className="bg-orange-500 bg-opacity-20 p-5">
      {links.map((link) => (
        <NavLink to={link.href} className="flex items-center gap-2">
          {link.icon}
          {props.isSidebarOpen && <span className="text-2xl">{link.name}</span>}
        </NavLink>
      ))}

      <button
        onClick={props.heandlerThemeSwith}
        className="mt-3 flex items-center gap-2"
      >
        {props.theme === "dark" ? (
          <IoToggleOutline className="rotate-180" />
        ) : (
          <IoToggle />
        )}
        {props.isSidebarOpen && <span>Dark</span>}
      </button>
    </aside>
  );
};
