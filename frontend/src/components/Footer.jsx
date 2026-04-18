import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0B1F3A] via-[#132A4A] to-[#1B3A5F] text-gray-300 px-6 md:px-12 lg:px-20 pt-16 pb-10">

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <a href="#home">
            <img
              src={logo}
              alt="Make Bee Trip"
              className="h-12 opacity-90 hover:opacity-100 transition"
            />
          </a>

          <p className="text-blue-100/70 text-sm max-w-md">
            Plan smarter journeys with seamless booking across flights, hotels,
            buses, and trains — all in one place.
          </p>

          <a
            href="#services"
            className="bg-white text-[#0B1F3A] hover:bg-gray-100 px-5 py-2 rounded-lg transition text-sm font-medium"
          >
            Explore
          </a>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Home", link: "#home" },
              { name: "Services", link: "#services" },
              { name: "Hotels", link: "#hotels" },
              { name: "About", link: "#about" },
              { name: "Contact", link: "#contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          <p className="text-blue-100/50 text-center">
            © {new Date().getFullYear()} Make Bee Trip
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;