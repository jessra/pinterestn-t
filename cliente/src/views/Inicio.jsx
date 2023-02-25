import ContenedorImg from "../components/ContenedorImg"
import VerPublicacion from "../components/VerPublicacion"
import ModalCrear from "../components/ModalCrear"
import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export function Inicio() {
	let msg = ''
	const { post } = useContext(Contexto_Funciones);
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[3]
	if (route == 'Favoritos') {
		msg = 'No hay favoritos'
	} else {
		msg = 'No hay publicaciones'
	}
	return (
		<>
		<VerPublicacion/>
		<ModalCrear />
		<ContenedorImg post={post} msg={msg}/>
		</>
	);
}
