import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContenedorImg from "../components/ContenedorImg"
import ModalCrear from "../components/ModalCrear"
import { useContext, useEffect } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
export default function Perfil() {
	const { post, listaPostUser, activo, cerrarSesion } = useContext(Contexto_Funciones);
	useEffect((e) => {
		listaPostUser();
	}, []);
	return (
		<>
			<ModalCrear />
			<button onClick={(e) => cerrarSesion()} className="btn-flat secundario pequeño float-right">
				<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
				<span className="px-2">Cerrar sesión</span>
			</button>
			<div className="mt-11 mt-md-1 d-flex justify-center align-items-center">
				<p className="encabezado-perfil">
					Publicaciones de
					<span className="d-block">{activo.user.name}</span>
				</p>
				<div className="contenedor-img perfil">
					<img src={"./src/imagenesTemporales/" + activo.user.img} alt="" />
				</div>
			</div>
			<ContenedorImg post={post} msg={'No has hecho publicaciones'}/>
		</>
	);
}
