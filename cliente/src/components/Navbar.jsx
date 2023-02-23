import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function Navbar() {
	const { modal, setModal } = useContext(Contexto_Funciones);
	return (
		<nav className="navbar">
			<div className="col-3">
				<div className="logo">
					<img alt="Pinterestn´t" src="./src/assets/logo.png" />
				</div>
			</div>
			<ul className="d-flex col-available">
				<li className="col-available text-center activo">Inicio</li>
				<li className="col-available text-center">Favoritos</li>
				<li className="col-available text-center">Perfil</li>
				<li className="col-available text-center" onClick={(e) => {setModal(!modal)}}>Crear</li>
			</ul>
			<div className="col-4">

			</div>
		</nav>
	);
}