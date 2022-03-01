import React, { FC, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const LoginForm: FC = () => {
	const { login } = useUsers();

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const onSubmit = (data: { email: string; pass: string }) => {
		try {
			login(data.email, data.pass);
		} catch (e) {
			// setAlert(e.message);
		}
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
			action=""
			onFinish={() => onSubmit({ email, pass })}
		>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Por favor ingrese E-mail!" }]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{ required: true, message: "Por favor ingrese una contraseña!" },
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Contraseña"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Recuerdame</Checkbox>
				</Form.Item>
			</Form.Item>

			<Form.Item>
				<Button
					style={{ marginRight: 10 }}
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Iniciar sesión
				</Button>
				O <Link to="/signup">Registrarse ahora!</Link>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
