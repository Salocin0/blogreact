import "./DetalleBlog.css";
import { useNavigate } from "react-router-dom";
const DetalleBlog = ({ blog }) => {
  const navigate = useNavigate();
  const hanldeClick = () => {
    navigate(`/`);
  };
  console.log(blog)

  return (
    <>
      <div className="contenedorDetalle">
        <img src={blog.imagen} alt={blog.descripcion} className="img" />
        <div className="datos">
          <h2 className="titulo">{blog.titulo}</h2>
          <div className="subdatos">
            <p className="autor">{blog.author || "autor por defecto"}</p>
            <p className="fecha">
              {new Date(blog.fechaPublicacion).toLocaleString("es")}
            </p>
          </div>
          <p className="descripcion">{blog.contenido}</p>
        </div>
      </div>
      <div>
        <button onClick={hanldeClick}>Volver</button>
      </div>
    </>
  );
};

export default DetalleBlog;
