import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { SignUpPage } from "./pages/signup";

const App = () => {
	return (
		<Router>
			<div className={"container"}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
