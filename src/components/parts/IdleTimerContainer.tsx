import { useRef } from "react";
import IdleTimer from "react-idle-timer";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const IdleTimerContainer = () => {
	const idleTimerRef = useRef<IdleTimer | null>(null);

	let navigate = useNavigate();

	const onIdle = () => {
		notification["warning"]({
			duration: 0,
			message: "Sesión expirada",
			description:
				"Su sesión ha expirado por superar el tiempo de inactividad. Inicie sesión nuevamente",
		});

		localStorage.removeItem("logged"); // Eliminamos variable logged para cerrar sesión
		navigate("/");
	};

	return (
		<IdleTimer
			ref={idleTimerRef as any}
			timeout={300 * 1000} // Asignamos tiempo permitido de inactividad
			onIdle={onIdle}
		/>
	);
};

export default IdleTimerContainer;
