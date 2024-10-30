import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CrearBLog from './pages/blogs/crearBlog/CrearBlog'
import ModificarBLog from './pages/blogs/modificarBlog/ModificarBlog'
import VerBlog from './pages/blogs/verBlog/VerBlog'
import Login from './pages/login/login'
import Register from './pages/register/Register'
import MyBlogs from './pages/myBlogs/MyBlogs'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-blog" element={<CrearBLog />}/>
        <Route path="/modificar-blog/:idblog" element={<ModificarBLog />}/>
        <Route path="/mis-blogs/:iduser" element={<VerBlog />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/blogs/:idblog" element={<VerBlog />}/>
        <Route path="/perfil" element={<MyBlogs />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
