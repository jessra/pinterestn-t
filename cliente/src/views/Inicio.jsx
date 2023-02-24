import ContenedorImg from "../components/ContenedorImg"
import VerPublicacion from "../components/VerPublicacion"
import ModalCrear from "../components/ModalCrear"
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export function Inicio() {
	let data = []
	let msg = ''
	const { post } = useContext(Contexto_Funciones);
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[3]
	if (route == 'Favoritos') {
		msg = 'No hay favoritos'
	} else {
		data = post
		msg = 'No hay publicaciones'
	}
	return (
		<>
    <Navbar />
		<VerPublicacion/>
		<ModalCrear />
		<ContenedorImg post={data} msg={msg}/>
		</>
	);
}
