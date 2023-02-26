import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../views/Inicio";
import Navbar from "../components/Navbar";
import Perfil from "../views/Perfil";
import { LogIn, SingIn } from "../views/Log";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Inicio />} />
					<Route path="Image/:id" element={<Inicio />} />
					<Route path="Favoritos" element={<Inicio />} />
					<Route path="Perfil" element={<Perfil />} />
				</Route>
				<Route path="LogIn" element={<LogIn />} />
				<Route path="SingIn" element={<SingIn />} />
			</Routes>
		</BrowserRouter>
	);
}
