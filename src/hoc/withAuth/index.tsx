import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const publicRoutes = ["/", "/signup"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
	const Authenticated = () => {
		const navigate = useNavigate();
		const location = useLocation();

		const { logged } = useUsers();

		if (logged && publicRoutes.includes(location.pathname)) navigate("/home");

		if (logged === false && !publicRoutes.includes(location.pathname))
			navigate("/");

		return <Component />;
	};

	return Authenticated;
};

export { WithAuth };
