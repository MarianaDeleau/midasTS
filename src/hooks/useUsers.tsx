import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../api/apiUsers";
import { message } from "antd";

const useUsers = () => {
	const navigate = useNavigate();

	const [userStorage, setUserStorage] = useState<string | undefined>(
		localStorage.getItem("logged") || undefined
	); // chequea si hay usuario logueado o no

	const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>(); //estado de usuario logueado

	useEffect(() => {
		if (userStorage) localStorage.setItem("logged", userStorage);
	}, [userStorage]); //cuando cambia el valor del user setea al local storage

	useEffect(() => {
		loginWithToken();
	}, []); //se ejecuta cada vez que se monta el componente para verificar que haya usuario logueado y devolver el componente validado por el HOC Withauth

	const login = (email: string, pass: string) => {
		try {
			const currentUser = Users.find((u) => {
				if (u.user === email && u.pass === pass) {
					return true;
				}
				return false;
			});

			if (currentUser) {
				setUserStorage("true");
				setHasUserLoggedIn(true);
				navigate("/home");
			} else {
				message.error("Usuario o contraseña incorrecta!", 5);
				setHasUserLoggedIn(false);
			}
		} catch (e) {
			console.log("Try again");
		}
	}; //se ejecuta con el submit del formulario

	const loginWithToken = () => {
		try {
			if (userStorage === "true") {
				setHasUserLoggedIn(true);
			} else {
				setHasUserLoggedIn(false);
			}
		} catch (e) {}
	}; //se ejecuta cada vez que se monta el componente para verificar que haya usuario logueado y devolver el componente validado por el HOC Withauth

	const logout = () => {
		localStorage.removeItem("logged");
		setHasUserLoggedIn(false);
		navigate("/");
	}; //se ejecuta con el evento del boton

	return { login, logout, hasUserLoggedIn, setHasUserLoggedIn };
};

export { useUsers };
