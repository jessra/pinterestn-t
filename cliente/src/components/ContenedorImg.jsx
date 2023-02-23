import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function ContenedorImg() {
	const { post } = useContext(Contexto_Funciones);
	return (
    <div className="contenedor-galeria">
      {post.map((p) => (
        <div key={p.idPub} className="contenedor-img">
          <img src={'./src/imagenesTemporales/' + p.img} alt="" />
        </div>
      ))}
    </div>
	);
}