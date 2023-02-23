import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function Navbar() {
	const { modal, setModal } = useContext(Contexto_Funciones);
	return (
		<>
			<div className="d-md-none contenedor-logo">
				<div className="logo">
					<img alt="Pinterestn´t" src="../src/assets/logo.png" />
				</div>
			</div>
			<nav className="navbar">
				<div className="d-none d-md-block contenedor-logo col-2 pb-2">
					<div className="logo">
						<img alt="Pinterestn´t" src="../src/assets/logo.png" />
					</div>
				</div>
				<ul className="d-flex col-available col-lg-8 col-xl-7">
					<li
						className="col-available text-center activo"
						onClick={(e) => {window.location.href = '/'}}
					>
						<FontAwesomeIcon icon="fa-solid fa-house" />
						<span className="d-none d-md-inline px-2">Inicio</span>
					</li>
					<li
						className="col-available text-center"
						onClick={(e) => {window.location.href = '/Favoritos'}}
					>
						<FontAwesomeIcon icon="fa-solid fa-heart" />
						<span className="d-none d-md-inline px-2">Favoritos</span>
					</li>
					<li
						className="col-available text-center"
						onClick={(e) => {window.location.href = '/Perfil'}}
					>
						<FontAwesomeIcon icon="fa-solid fa-user" />
						<span className="d-none d-md-inline px-2">Perfil</span>
					</li>
					<li
						className="d-none d-lg-block col-available text-center"
						onClick={(e) => {setModal(!modal)}}
					>
						<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
						<span className="d-none d-md-inline px-2">Crear</span>
					</li>
				</ul>
				<div className="col-4 col-sm-3 col-md-2 contenedor-sesion">
					<div className="contenedor-img sesion">
						<img src="../src/imagenesTemporales/perfil.jpg" alt="" />
					</div>
					<p className="texto-sesion">Gloria Artiga</p>
				</div>
			</nav>
			<button
				className="btn-icon btn-fixed-bottom d-lg-none"
				onClick={(e) => {setModal(!modal)}}
			>
				<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
				<span className="d-none d-md-inline px-2">Crear</span>
			</button>
		</>
	);
}
