import { FC } from "react";
import LoginForm from "../components/forms/LoginForm";
import { WithAuth } from "../hoc/index";

const Login: FC = () => {
	return (
		<div className={"login-container"}>
			<h1 style={{ marginBottom: 40 }}>NOTICIAS COVID-19</h1>
			<LoginForm />
		</div>
	);
};

export const LoginPage = WithAuth(Login);
