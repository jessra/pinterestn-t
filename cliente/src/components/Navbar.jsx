export default function Navbar() {
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
				<li className="col-available text-center">Crear</li>
			</ul>
			<div className="col-4">

			</div>
		</nav>
	);
}