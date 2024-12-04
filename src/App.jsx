import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import CrearBLog from "./pages/blogs/crearBlog/CrearBlog";
import ModificarBLog from "./pages/blogs/modificarBlog/ModificarBlog";
import VerBlog from "./pages/blogs/verBlog/VerBlog";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import MyBlogs from "./pages/myBlogs/MyBlogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logout from "./pages/login/Logout";
import MisProductos from "./pages/productosPaginados/MisProductos";
//import RequireAuth from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
//import RequireAuth from "react-auth-kit/RequireAuth";
function App() {
  const {isLogged} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/crear-blog"
          element={
//           <RequireAuth isLogged={isLogged}>
              <CrearBLog />
 //          </RequireAuth>
          }
        />
        <Route path="/modificar-blog/:idblog" element={<ModificarBLog />} />
        <Route path="/mis-blogs/" element={<MyBlogs />} />
        <Route path="/productos-paginados/" element={<MisProductos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs/:idblog" element={<VerBlog />} />
        <Route path="/perfil" element={<MyBlogs />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
