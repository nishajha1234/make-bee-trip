// components/Navbar.jsx

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Home,
  Info,
  Briefcase,
  Hotel,
  Phone,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", id: "home", icon: <Home size={18} /> },
    { name: "Services", id: "services", icon: <Briefcase size={18} /> },
    { name: "Hotels", id: "hotels", icon: <Hotel size={18} /> },
    { name: "About", id: "about", icon: <Info size={18} /> },
    { name: "Contact", id: "contact", icon: <Phone size={18} /> },
  ];

const handleClick = (id) => {
  setActive(id);
  setIsOpen(false);

  if (location.pathname === "/") {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/", { state: { scrollTo: id } });
  }
};

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      {!isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b z-50 flex items-center justify-between px-4 py-3">
          <img src={logo} alt="Make Bee Trip" className="h-9" />

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* ================= OVERLAY ================= */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <img src={logo} className="h-9" />

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4 px-3">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex fixed left-0 top-0 flex-col w-64 h-screen bg-gradient-to-b from-white to-blue-50 border-r px-5 py-6 z-50 shadow-lg">
        <div className="mb-10 flex justify-center border-b pb-5">
          <img src={logo} alt="Make Bee Trip" className="h-14" />
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r"></span>
                )}

                {item.icon}
                {item.name}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;