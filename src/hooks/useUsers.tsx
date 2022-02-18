import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../api/apiUsers";
import { message } from "antd";

const useUsers = () => {
	const navigate = useNavigate();
	const [logged, setLogged] = useState(
		JSON.parse(localStorage.getItem("logged")!) || false
	);

	const login = (email: string, password: string) => {
		const exist = Users.find((u) => {
			return u.user === email && u.pass === password;
		});

		if (exist) {
			localStorage.setItem("logged", JSON.stringify(true));
			setLogged(true);
			navigate("/");
		} else {
			message.error("Usuario o contraseña incorrecta!", 5);
			setLogged(false);
		}
	};

	const logout = () => {
		localStorage.removeItem("logged");
		navigate("/");
		setLogged(false);
	};

	return { login, logged, setLogged, logout };
};

export { useUsers };
