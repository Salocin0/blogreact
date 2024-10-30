import { Link } from "react-router-dom";
const Header = () => {
    const links = [
        {to:"/",titulo:"Inicio"}
    ]
    /*const linksLogin = [
        {to:"/crear-blog",titulo:"Crear Blog"},
        {to:"/mis-blog",titulo:"Mis Blogs"},
        {to:"/logout",titulo:"Cerrar Sesion"}
    ] 
    const linksLogout = [
        {to:"/login",titulo:"Login"},
        {to:"/register",titulo:"Register"},
    ] */

    return (
        <div>
            <div>
                <h1>titulo</h1>
                {links.map((link)=>{
                    <Link to={link.to} key={link.to}>{link.titulo}</Link>
                })}
            </div>
            <div>
                {/*links dinamicos */}
            </div>
        </div>
    )
}

export default Header