import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import {
  Plane,
  Bus,
  Train,
  Hotel,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/**
 * Featured Hotels
 */
const featuredHotels = [
  {
    id: 101,
    name: "Hotel Taj Palace",
    city: "Delhi",
    price: 5000,
    rating: 4.5,
    image: "/images/taj.png",
  },
  {
    id: 102,
    name: "Sea View Resort",
    city: "Goa",
    price: 3500,
    rating: 4.2,
    image: "/images/seaview.png",
  },
  {
    id: 103,
    name: "Royal Stay",
    city: "Jaipur",
    price: 2800,
    rating: 4.0,
    image: "/images/royal.png",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (formData) => {
    try {
      const query = new URLSearchParams(formData).toString();
      if (!query) return;
      navigate(`/results?${query}`);
    } catch (error) {
      console.error("Navigation error:", error.message);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home">
        <Hero onSearch={handleSearch} />
      </section>
<section
  id="services"
  className="relative px-6 md:px-16 pt-20 pb-16 overflow-hidden"
>
  <div className="absolute inset-0 z-0">
    <img
      src="/images/services-bg.jpg"
      alt="Travel services background"
      className="w-full h-full object-cover contrast-110 saturate-110"
    />
<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/70"></div>
  </div>

  <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
    <p className="text-blue-500 font-semibold mb-2">OUR SERVICES</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Everything You Need For Travel
    </h2>
    <p className="text-gray-500 text-lg">
      Plan, book and manage your trips effortlessly with real-time updates and best pricing.
    </p>
  </div>

  <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
    {[
      { title: "Flights", icon: <Plane size={34} /> },
      { title: "Bus", icon: <Bus size={34} /> },
      { title: "Train", icon: <Train size={34} /> },
      { title: "Hotels", icon: <Hotel size={34} /> },
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-white/80 backdrop-blur-md border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
      >
        <div className="mb-6 flex justify-center text-blue-500 group-hover:scale-110 transition">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">
          {item.title} Booking
        </h3>
        <p className="text-gray-500 text-sm text-center">
          Fast and seamless {item.title.toLowerCase()} booking experience.
        </p>
      </div>
    ))}
  </div>

  <div className="relative z-10 mt-14 text-center text-gray-500 max-w-3xl mx-auto">
    Trusted by thousands of travelers for secure and affordable bookings.
  </div>
</section>

      {/* ================= HOTELS ================= */}
<section
  id="hotels"
  className="px-6 md:px-12 lg:px-20 pt-20 pb-16 bg-gray-50"
>
  <div className="max-w-5xl mx-auto text-center mb-12">
    <p className="text-blue-500 font-semibold mb-2">FEATURED STAYS</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Find Your Perfect Stay
    </h2>
    <p className="text-gray-500 text-lg">
      Discover handpicked hotels offering comfort, luxury and the best value for your journey.
    </p>
  </div>

  <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
  {featuredHotels.map((hotel) => (
    <div
      key={hotel.id}
      className="bg-white rounded-2xl shadow-sm overflow-hidden border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    >
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-[280px] md:h-[280px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">
          {hotel.name}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          {hotel.city}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold text-lg">
            ₹{hotel.price}
          </span>

          <span className="text-sm text-gray-500">
            ⭐ {hotel.rating}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

  <div className="mt-14 text-center text-gray-500 max-w-3xl mx-auto">
    Explore more destinations and stay options tailored to your travel needs.
  </div>
</section>

{/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
>
  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <p className="text-blue-600 font-semibold tracking-wide mb-3">
        ABOUT US
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
        Travel Beyond Limits
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
        We simplify your journey by combining flights, hotels, buses, and trains
        into one seamless platform — helping you save time, money, and effort
        while exploring the world with confidence.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-6">
        {[
          ["10K+", "Happy Travelers"],
          ["500+", "Destinations"],
          ["24/7", "Support"],
          ["Best", "Price Guarantee"],
        ].map(([value, label], i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-600">
              {value}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">
      
      <div className="w-full max-w-[520px] relative">
        <img
          src="/images/travel.jpg"
          alt="Travel experience"
          className="w-full h-[420px] md:h-[480px] object-cover rounded-3xl shadow-xl"
        />

        {/* FLOATING BADGE */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
          <span className="text-2xl">✈️</span>
          <div>
            <p className="text-sm text-gray-500">Trusted by</p>
            <p className="font-semibold text-gray-800">10,000+ Travelers</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

 <section
  id="contact"
  className="relative px-6 md:px-12 lg:px-20 py-24 bg-gray-50 overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 -z-10"></div>

  <div className="max-w-[1200px] mx-auto text-center mb-14">
    <p className="text-blue-600 font-semibold mb-2">CONTACT</p>

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Let’s Plan Your Journey
    </h2>

    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
      Reach out anytime — our team is here to assist you with bookings,
      recommendations, and travel planning.
    </p>
  </div>

  <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
    {[
      { icon: <Phone size={26} />, title: "Call Us", value: "+91 98765 43210" },
      { icon: <Mail size={26} />, title: "Email", value: "support@makebeetrip.com" },
      { icon: <MapPin size={26} />, title: "Location", value: "New Delhi, India" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
      >
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
          {item.icon}
        </div>

        <h3 className="font-semibold text-lg mb-1">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm">
          {item.value}
        </p>
      </div>
    ))}
  </div>

  <div className="max-w-[900px] mx-auto mt-16 bg-white border rounded-2xl p-8 md:p-10 text-center shadow-sm">
    <h3 className="text-2xl font-semibold mb-4">
      Need Help Planning Your Trip?
    </h3>

    <p className="text-gray-500 ">
      Our travel experts are available 24/7 to guide you through bookings,
      destinations, and exclusive deals.
    </p>
  </div>
</section>
<Footer />
    </>
  );
};

export default Home;