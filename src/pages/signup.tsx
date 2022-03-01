import { FC } from "react";
import SignupForm from "../components/forms/SignupForm";
import { WithAuth } from "../hoc/index";

const Signup: FC = () => {
	return (
		<div className={"login-container"}>
			<h2>Signup</h2>
			<SignupForm style={{ width: "100%" }} submit={() => "simulado"} />
		</div>
	);
};

export const SignUpPage = WithAuth(Signup);
