import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ModificarBLog = () => {
    const { idblog } = useParams();
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [contenido, setContenido] = useState("");
    const [imagen, setImagen] = useState("");
    const [blog, setBlog] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchback = async () => {
            const response = await fetch( `http://localhost:3000/blogs/${idblog}`);
            const data = await response.json();
            setBlog(...data.data) //llega en forma de array y hay que aplicar spread
            console.log(...data.data);
          }

          fetchback()
    },[])

    useEffect(()=>{
          setTitulo(blog.titulo)
          setDescripcion(blog.descripcion)
          setContenido(blog.contenido)
          setImagen(blog.imagen)
    },[blog])
     
    //cuando apretamos modificar hace el put al back con los datos nuevos
    const handleModificar = async (e) => {
        e.preventDefault();
        const blog = {
            titulo: titulo,
            descripcion: descripcion,
            contenido: contenido,
            imagen: imagen,
            autor: 1
        }
        const response = await fetch( `http://localhost:3000/blogs/${idblog}`,{
            method: "PUT",
            body: JSON.stringify(blog),
            headers: { "Content-Type": "application/json" },
        });
            const data = await response.json();
            console.log(data);
            navigate("/mis-blogs/");
    }

    const handleVolver = () =>{
        navigate("/mis-blogs/");
    }

  return (
    <div>
      <h1>Modificar Blog</h1>
      <form onSubmit={(e) => handleModificar(e)} className="form">
        <label htmlFor="titulo" className="label">
          Titulo
        </label>
        <input
          type="text"
          id="titulo"
          onChange={(e) => setTitulo(e.target.value)}
          className="input"
          value={titulo}
        />
        <label htmlFor="descripcion" className="label">
          Descripcion
        </label>
        <input
          type="text"
          id="descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          className="input"
          value={descripcion}
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
          value={contenido}
        ></textarea>
        <label htmlFor="imagen" className="label">
          Imagen
        </label>
        <input
          type="text"
          id="imagen"
          onChange={(e) => setImagen(e.target.value)}
          className="input imagen"
          value={imagen}
        />
        <div>
        <button onClick={() => handleVolver()}>Volver</button>
          <button type="submit">Modificar</button>
        </div>
      </form>
    </div>
  );
};

export default ModificarBLog;
