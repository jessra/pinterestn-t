export default function CrearPublicacion() {
	return (
		<div className="d-flex justify-center">
			<div className="contenedor-img">
				<img src="./src/imagenesTemporales/photo_2023-01-27_11-16-59.jpg" alt="" />
			</div>
			<div className="d-flex flex-column col-5 p-4">
				<p className="titulo">Borem ipsum</p>
				<p className="descripcion">
					Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
					molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
					accumsan.
				</p>
				<div className="d-flex align-items-end col-available">
					<button className="btn-outline">Editar</button>
					<button className="btn-flat primario">Favorito</button>
				</div>
			</div>
		</div>
	);
}
