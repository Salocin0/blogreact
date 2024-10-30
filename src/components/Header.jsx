import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/my-blogs", label: "Mis Blogs" },
];

const loggedLinks = [
  { to: "/new-post", label: "Nuevo Blog", className: "link-end" },
  { to: "/logout", label: "Cerrar sesión", className: "link-end" },
];

const logoutLinks = [
  { to: "/login", label: "Login", className: "link-end" },
  { to: "/register", label: "register", className: "link-end" },
];

const Header = () => {
  const { isLogged } = useContext(AuthContext);
  return (
    <nav >
      <div >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div >
        
      </div>
    </nav>
  );
};

export default Header;
