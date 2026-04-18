import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Navbar />

      <main
        className="
          flex-1
          md:ml-64
          pt-16 md:pt-0
        "
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;