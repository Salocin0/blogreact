import "../home/Blog.css";
import { useNavigate } from "react-router-dom";
const MyBlog = ({ blog,handleDelete }) => {
    const navigate = useNavigate()

    const handleUpdate = async (id) => {
      navigate(`/modificar-blog/${id}`)
    }

  return (
    <div className="contenedor">
      <img src={blog.imagen} alt={blog.descripcion} className="img" />
      <div className="datos">
        <h2 className="titulo">{blog.titulo}</h2>
        <div className="subdatos">
          <p className="autor">{blog.author || "autor por defecto"}</p>
          <p className="fecha">
            {new Date(blog.fechaPublicacion).toLocaleString("es")}
          </p>
        </div>
        <p className="descripcion">{blog.descripcion}</p>
        <button onClick={() => handleDelete(blog.id)}>Borrar</button>
        <button onClick={() => handleUpdate(blog.id)}>Modificar</button>
      </div>
    </div>
  );
};

export default MyBlog;
