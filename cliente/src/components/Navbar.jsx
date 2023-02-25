import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
import { Outlet } from "react-router-dom";

export default function Navbar() {
	const [mostrarUl, setMostrarUl] = useState(true);
	const { modal, setModal, activo, cat, filtrar } = useContext(Contexto_Funciones);
	const [category, setCategory] = useState("");
	const [category2, setCategory2] = useState("");
	const [autor, setAutor] = useState("");
	const [autor2, setAutor2] = useState("");
	const vistaActual = window.location.href;
	const route = vistaActual.split("/")[3];
	let classIn, classFav, classPer = ''
	if (route == 'Perfil') {
		classPer = 'activo'
	} else if (route == 'Favoritos') {
		classFav = 'activo'
	} else {
		classIn = 'activo'
	}
	const filtroCat = (e) => {
		setCategory(e.target.value.toUpperCase())
		filtrar(e.target.value.toUpperCase(), autor)
	}
	const filtroAutor = (e) => {
		setAutor(e.target.value)
		filtrar(category, e.target.value)
	}
	const filtroCat2 = (e) => {
		setCategory2(e.target.value.toUpperCase())
		filtrar(e.target.value.toUpperCase(), autor2)
	}
	const filtroAutor2 = (e) => {
		setAutor2(e.target.value)
		filtrar(category2, e.target.value)
	}
	return (
		<>
			<div className="d-md-none contenedor-logo">
				<div className="logo animacion-rotar">
					<img alt="Pinterestn´t" src="../src/assets/logo.png" />
				</div>
				{ !route ?
					(<div className="buscador d-lg-none">
						<button className="btn-outline secundario" onClick={() => setMostrarUl(!mostrarUl)}>
							<FontAwesomeIcon
								icon={mostrarUl ? "fa-solid fa-magnifying-glass" : "fa-solid fa-times"}
							/>
							<span className="px-2">{mostrarUl ? "Buscar" : "Cancelar"}</span>
						</button>
						<div className={mostrarUl ? "d-none" : "d-block d-sm-flex"}>
							<div className="grupo-inputs animacion-flip-horizontal">
								<input
									type="text"
									multiple
									id="categoria2"
									list="categorias2"
									placeholder="Busca por categoría"
									value={category2}
									onChange={filtroCat2}
								/>
								<label htmlFor="categoria2">Categoría</label>
								<datalist id="categorias2">
											{cat.map((c) => (
												<option key={c.idCat} value={c.nameCat}>
													{c.nameCat}
												</option>
											))}
										</datalist>
							</div>
							<div className="grupo-inputs animacion-flip-horizontal">
								<input
									type="text"
									id="autores2"
									placeholder="Busca por Autor"
									value={autor2}
									onChange={filtroAutor2}
								/>
								<label htmlFor="autores">Autor</label>
							</div>
						</div>
					</div>) : (<></>)
				}
			</div>
			<nav className="navbar">
				<div className="d-none d-md-block contenedor-logo pb-2 col-lg-1">
					<div className="logo animacion-rotar">
						<img alt="Pinterestn´t" src="../src/assets/logo.png" />
					</div>
				</div>
				<ul className={mostrarUl ? "col-available" : "ocultar-nav col-available col-lg-auto"}>
					<li
						className={"text-center " + classIn + " col-available col-md-auto col-lg-auto"}
						onClick={(e) => {
							window.location.href = "/";
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-house" />
						<span className="d-none d-md-inline px-2">Inicio</span>
					</li>
					<li
						className={"text-center " + classFav +" col-available col-md-auto"}
						onClick={(e) => {
							window.location.href = "/Favoritos";
						}}
					>
						<FontAwesomeIcon icon="fa-solid fa-heart" />
						<span className="d-none d-md-inline px-2">Favoritos</span>
					</li>
					<li
						className={"text-center " + classPer +" col-available col-md-auto"}
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
				{ !route ? 
					(<div
						className={
							mostrarUl
								? "buscador d-none d-md-flex col-auto"
								: "buscador d-none d-md-flex col-available"
						}
					>
						<div className={mostrarUl ? "d-none" : "d-flex"}>
							<div className="grupo-inputs animacion-flip-horizontal">
								<input
									type="text"
									multiple
									id="categoria"
									list="categorias"
									placeholder="Busca por categoría"
									value={category}
									onChange={filtroCat}
								/>
								<label htmlFor="categoria">Categoría</label>
								<datalist id="categorias">
									{cat.map((c) => (
										<option key={c.idCat} value={c.nameCat}>
											{c.nameCat}
										</option>
									))}
								</datalist>
							</div>
							<div className="grupo-inputs animacion-flip-horizontal">
								<input
									type="text"
									id="autores"
									placeholder="Busca por Autor"
									value={autor}
									onChange={filtroAutor}
								/>
								<label htmlFor="autores">Autor</label>
							</div>
						</div>
						<div className="col-auto">
							<button className="btn-outline secundario" onClick={() => {setMostrarUl(!mostrarUl)}}>
								<FontAwesomeIcon
									icon={mostrarUl ? "fa-solid fa-magnifying-glass" : "fa-solid fa-times"}
								/>
								<span className="px-1">{mostrarUl ? "Buscar" : "Cancelar"}</span>
							</button>
						</div>
					</div>) : (<></>)
				}
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
			<Outlet />
		</>
	);
}
