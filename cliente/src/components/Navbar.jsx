import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
	return (
		<>
			<div className="d-md-none contenedor-logo">
				<div className="logo">
					<img alt="Pinterestn´t" src="./src/assets/logo.png" />
				</div>
			</div>
			<nav className="navbar">
				<div className="d-none d-md-block contenedor-logo col-2 pb-2">
					<div className="logo">
						<img alt="Pinterestn´t" src="./src/assets/logo.png" />
					</div>
				</div>
				<ul className="d-flex col-available col-lg-6 col-xl-5">
					<li className="col-available text-center activo">
						<FontAwesomeIcon icon="fa-solid fa-house" />
						<span className="d-none d-md-inline px-2">Inicio</span>
					</li>
					<li className="col-available text-center">
						<FontAwesomeIcon icon="fa-solid fa-heart" />
						<span className="d-none d-md-inline px-2">Favoritos</span>
					</li>
					<li className="col-available text-center">
						<FontAwesomeIcon icon="fa-solid fa-user" />
						<span className="d-none d-md-inline px-2">Perfil</span>
					</li>
					<li className="d-none col-available text-center">
						<span className="d-none d-md-inline px-2">Crear</span>
					</li>
				</ul>
				<div className="col-4 col-sm-3 col-md-2 contenedor-sesion">
					<div className="contenedor-img sesion">
						<img src="./src/imagenesTemporales/perfil.jpg" alt="" />
					</div>
					<p className="texto-sesion">Gloria Artiga</p>
				</div>
			</nav>
		</>
	);
}
