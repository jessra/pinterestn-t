import Navbar from "../components/Navbar";
import ContenedorImg from "../components/ContenedorImg"
import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
export default function Perfil() {
	const { postFavs } = useContext(Contexto_Funciones);
	return (
		<>
    <Navbar />
		<div className="d-flex justify-center">
			<p className="encabezado-perfil">
				Publicaciones de
				<span className="d-block">
					Gloria Artiga
				</span>
			</p>
			<div className="contenedor-img perfil">
        <img src="./src/imagenesTemporales/perfil.jpg" alt="" />
      </div>
		</div>
		<ContenedorImg post={postFavs} msg={'No has hecho publicaciones'}/>
		</>
	);
}
