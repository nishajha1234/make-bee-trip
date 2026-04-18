import { useState } from "react";
import SearchForm from "./SearchForm";
import { Plane, Bus, Train, Hotel } from "lucide-react";

const Hero = ({ onSearch }) => {
  const [type, setType] = useState("flights");

  const options = [
    { id: "flights", label: "Flights", icon: <Plane size={18} /> },
    { id: "buses", label: "Bus", icon: <Bus size={18} /> },
    { id: "trains", label: "Train", icon: <Train size={18} /> },
    { id: "hotels", label: "Hotels", icon: <Hotel size={18} /> },
  ];

  return (
    <section className="relative h-[99.9vh] flex items-center justify-center px-4 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Travel background"
          className="w-full h-full object-cover scale-105"
        />

        {/* 🔥 FIXED OVERLAY */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl text-center">

        {/* HEADING */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Explore the World with Ease
        </h1>

        <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Book flights, buses, trains, and hotels — all in one seamless platform.
        </p>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {options.map((item) => (
            <button
              key={item.id}
              onClick={() => setType(item.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm md:text-base transition-all duration-200
                ${
                  type === item.id
                    ? "bg-white text-gray-900 shadow-md scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* SEARCH BOX */}
        <div className="max-w-4xl mx-auto">
          <SearchForm
            type={type}
            onSearch={(data) => onSearch({ ...data, type })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;