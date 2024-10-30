import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Header.css"

const links = [{ to: "/", label: "Inicio" }];

const loggedLinks = [
  { to: "/crear-blog", label: "Nuevo Blog", className: "link-end" },
  { to: "/mis-blog", label: "Mis Blogs", className: "link-end" },
  { to: "/logout", label: "Cerrar sesión", className: "link-end" },
];

const logoutLinks = [
  { to: "/login", label: "Login", className: "link-end" },
  { to: "/register", label: "register", className: "link-end" },
];

const Header = () => {
  const { isLogged } = useContext(AuthContext);
  return (
    <nav className="contenedorNav">
      <div className="contenedorLinks">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={"link"}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="contenedorLinksDinamico">
        {isLogged &&
          loggedLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={"link"}>
              {link.label}
            </NavLink>
          ))}
          {!isLogged &&
          logoutLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={"link"}>
              {link.label}
            </NavLink>
          ))}
      </div>
    </nav>
  );
};

export default Header;
