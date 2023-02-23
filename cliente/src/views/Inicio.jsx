import Navbar from "../components/Navbar";
import ContenedorImg from "../components/ContenedorImg"
import VerPublicacion from "../components/VerPublicacion"
import ModalCrear from "../components/ModalCrear"

export function Inicio() {
	return (
		<>
    <Navbar />
		<VerPublicacion />
		{/* <ModalCrear /> */}
		<ContenedorImg />
		</>
	);
}
