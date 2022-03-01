import { Spin } from "antd";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const publicRoutes = ["/", "/signup"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
	const Authenticated: FC = (): JSX.Element | null => {
		const navigate = useNavigate();
		const location = useLocation();

		const { hasUserLoggedIn } = useUsers();

		if (hasUserLoggedIn === undefined) return <Spin />;

		if (hasUserLoggedIn && publicRoutes.includes(location.pathname))
			navigate("/home");

		if (!hasUserLoggedIn && !publicRoutes.includes(location.pathname))
			navigate("/");

		return <Component />;
	};

	return Authenticated;
};

export { WithAuth };
