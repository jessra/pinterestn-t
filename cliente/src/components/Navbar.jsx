import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function Navbar() {
	const [mostrarUl, setMostrarUl] = useState(true);
	const { modal, setModal, activo } = useContext(Contexto_Funciones);
	return (
		<>
			<div className="d-md-none contenedor-logo">
				<div className="logo animacion-rotar">
					<img alt="Pinterestn´t" src="../src/assets/logo.png" />
				</div>
				<div className="buscador w-100">
					<div className="grupo-inputs">
						<input
							type="text"
							multiple
							id="categoria"
							list="categorias"
							placeholder="Busca por categoría"
							// value={category}
						/>
						<label htmlFor="categoria">Categoría</label>
						{/* <datalist id="categorias">
								{cat.map((c) => (
									<option key={c.idCat} value={c.nameCat}>
										{c.nameCat}
									</option>
								))}
							</datalist> */}
					</div>
				</div>
			</div>
			<nav className="navbar">
				<div className="d-none d-md-block contenedor-logo pb-2 col-lg-1">
					<div className="logo animacion-rotar">
						<img alt="Pinterestn´t" src="../src/assets/logo.png" />
					</div>
				</div>
				<ul className={mostrarUl ? "lista-nav col-available" : "ocultar-nav col-lg-auto"}>
					<li
						className="text-center activo col-available col-md-auto col-lg-auto"
						onClick={(e) => {
							window.location.href = "/";
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-house" />
						<span className="d-none d-md-inline px-2">Inicio</span>
					</li>
					<li
						className="text-center col-available col-md-auto"
						onClick={(e) => {
							window.location.href = "/Favoritos";
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-heart" />
						<span className="d-none d-md-inline px-2">Favoritos</span>
					</li>
					<li
						className="text-center col-available col-md-auto"
						onClick={(e) => {
							window.location.href = "/Perfil";
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-user" />
						<span className="d-none d-md-inline px-2">Perfil</span>
					</li>
					<li
						className="d-none d-lg-block text-center"
						onClick={(e) => {
							setModal(!modal);
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
						<span className="d-none d-md-inline px-2">Crear</span>
					</li>
				</ul>
				<div
					className={
						mostrarUl
							? "buscador d-none d-md-block"
							: "buscador d-none d-md-block col-available"
					}
				>
					<input type="checkbox" id="check-buscador" className="d-none" />
					<label htmlFor="check-buscador" className="abrir" onClick={() => setMostrarUl(false)}>
						<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
						<span className="px-2">Buscar</span>
					</label>
					<label
						htmlFor="check-buscador"
						className="cerrar animacion-flip-horizontal"
						onClick={() => setMostrarUl(true)}
					>
						<FontAwesomeIcon icon="fa-solid fa-times" />
					</label>
					<div className="grupo-inputs animacion-flip-horizontal">
						<input
							type="text"
							multiple
							id="categoria"
							list="categorias"
							placeholder="Busca por categoría"
							// value={category}
						/>
						<label htmlFor="categoria">Categoría</label>
						{/* <datalist id="categorias">
								{cat.map((c) => (
									<option key={c.idCat} value={c.nameCat}>
										{c.nameCat}
									</option>
								))}
							</datalist> */}
					</div>
				</div>
				<div className="col-4 col-sm-3 col-md-2 contenedor-sesion">
					<div className="contenedor-img sesion">
						<img src={"../src/imagenesTemporales/" + activo.user.img} alt="" />
					</div>
					<p className="texto-sesion">{activo.user.name}</p>
				</div>
			</nav>
			<button
				className="btn-icon btn-fixed-bottom d-lg-none"
				onClick={(e) => {
					setModal(!modal);
				}}
			>
				<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
				<span className="d-none d-md-inline px-2">Crear</span>
			</button>
		</>
	);
}
