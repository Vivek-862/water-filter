// import { Link } from "@tanstack/react-router";

// const Header=()=> {
//   return (
//     <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
//       {/* Logo */}
//       <h1 className="text-xl font-bold text-blue-600">PAANI</h1>

//       {/* Navigation */}
//       <nav className="flex gap-6 text-gray-700 font-medium">
//         <Link
//           to="/"
//           className="[&.active]:text-blue-600 hover:text-blue-500"
//         >
//           Home
//         </Link>

//         <Link
//           to="/about"
//           className="[&.active]:text-blue-600 hover:text-blue-500"
//         >
//           About
//         </Link>

//         <Link
//           to="/products"
//           className="[&.active]:text-blue-600 hover:text-blue-500"
//         >
//           Product
//         </Link>

//         <Link
//           to="/login"
//           className="[&.active]:text-blue-600 hover:text-blue-500"
//         >
//           Login
//         </Link>
//       </nav>
//     </header>
//   );
// }


// export default Header

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import PaaniLogo from "./PaaniLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const navLink =
    "block py-2 px-3 rounded hover:bg-blue-50 transition-all duration-300 [&.active]:text-blue-600";

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <PaaniLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/home" className={navLink}>Home</Link>
          <Link to="/about" className={navLink}>About</Link>
          <Link to="/products" className={navLink}>Product</Link>
        <Link to="/login" className={navLink} onClick={() => setOpen(false)}>Book Appointment</Link>

          {/* {isLoggedIn ? (
            <button
              onClick={logout}
              className="text-red-500 hover:scale-105 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className={navLink}>Login</Link>
          )} */}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <Link to="/home" className={navLink} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className={navLink} onClick={() => setOpen(false)}>About</Link>
          <Link to="/product" className={navLink} onClick={() => setOpen(false)}>Product</Link>
          <Link to="/login" className={navLink} onClick={() => setOpen(false)}>Book Appointment</Link>

          {/* {isLoggedIn ? (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-red-500"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className={navLink} onClick={() => setOpen(false)}>Login</Link>
          )} */}
        </div>
      )}
    </header>
  );
}
