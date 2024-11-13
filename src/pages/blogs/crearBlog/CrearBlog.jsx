import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrearBlog.css";
const backurl = import.meta.env.VITE_BACK_URL;

const CrearBLog = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    console.log(titulo, descripcion, contenido, imagen);
  }, [titulo, descripcion, contenido, imagen]);

  const handleCrear = async (e) => {
    e.preventDefault();
    const blog = {
      titulo: titulo,
      descripcion: descripcion,
      contenido: contenido,
      imagen: imagen,
    };
    await fetchback(blog);
    console.log(blog);
    navigate("/mis-blogs/");
  };
  const handleVolver = () => {
    navigate("/mis-blogs/");
  };

  const fetchback = async (blog) => {
    const response = await fetch(`${backurl}blogs/`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Crear Blog</h1>
      <form onSubmit={(e) => handleCrear(e)} className="form">
        <label htmlFor="titulo" className="label">
          Titulo
        </label>
        <input
          type="text"
          id="titulo"
          onChange={(e) => setTitulo(e.target.value)}
          className="input"
        />
        <label htmlFor="descripcion" className="label">
          Descripcion
        </label>
        <input
          type="text"
          id="descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          className="input"
        />
        <label htmlFor="contenido" className="label">
          Contenido
        </label>
        <textarea
          name=""
          id="contenido"
          cols={60}
          rows={10}
          onChange={(e) => setContenido(e.target.value)}
          className="input"
        ></textarea>
        <label htmlFor="imagen" className="label">
          Imagen
        </label>
        <input
          type="text"
          id="imagen"
          onChange={(e) => setImagen(e.target.value)}
          className="input imagen"
        />
        <div>
          <button onClick={handleVolver}>Volver</button>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default CrearBLog;
