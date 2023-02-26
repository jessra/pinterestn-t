import ContenedorImg from "../components/ContenedorImg"
import VerPublicacion from "../components/VerPublicacion"
import ModalCrear from "../components/ModalCrear"
import Alerts from "../components/Alert";
import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export function Inicio() {
	let msg = ''
	const { post, activo } = useContext(Contexto_Funciones);
	const vistaActual = window.location.href
	const route = vistaActual.split('/')[3]
	if (route == 'Favoritos') {
		msg = 'Aun no has guardado nada en favoritos, pásate por la vista de inicio a ver si te gusta algo'
	} else {
		msg = 'Ups... parece que aun no hay publicaciones ¿qué tal si empiezas tú por publicar una?'
	}
	if (activo.token) {
		return (
			<>
			<VerPublicacion/>
			<ModalCrear />
			<ContenedorImg post={post} msg={msg}/>
			<Alerts></Alerts>
			</>
		);
	} else {
		window.location.href = '/LogIn';
	}
}
