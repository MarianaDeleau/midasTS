import React, { FC } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

type Props = {
	style: React.CSSProperties;
	submit: (values: string) => void;
};

const SignupForm: FC<Props> = ({ style, submit }) => {
	//const { style, submit } = props;

	return (
		<Form
			{...formItemLayout}
			style={style}
			className={"signup-form"}
			name="register"
			onFinish={(values) => submit(values)}
			scrollToFirstError
		>
			<Form.Item
				name="email"
				label="E-mail"
				rules={[
					{
						type: "email",
						message: "Ingrese un E-mail correcto!",
					},
					{
						required: true,
						message: "Por favor ingrese un E-mail!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="password"
				label="Contraseña"
				rules={[
					{
						required: true,
						message: "Por favor ingrese una contraseña!",
					},
					{
						min: 6,
						message: "La contraseña debe tener al menos 6 caracteres!",
					},
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="confirm"
				label="Confirmar PW"
				dependencies={["password"]}
				hasFeedback
				rules={[
					{
						required: true,
						message: "Por favor confirme contraseña!",
					},
					({ getFieldValue }) => ({
						validator(rule, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject("Las contraseñas no coinciden!");
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="agreement"
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) =>
							value
								? Promise.resolve()
								: Promise.reject("Debe aceptar las condiciones de uso"),
					},
				]}
				{...tailFormItemLayout}
			>
				<Checkbox>
					He leído y acepto las <a href="/">condiciones</a>
				</Checkbox>
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button style={{ marginRight: 10 }} type="primary" htmlType="submit">
					Register
				</Button>
				O <Link to="/">Iniciar sesión!</Link>
			</Form.Item>
		</Form>
	);
};

/* Encolumnado del formulario para responsive*/
const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};

/* Encolumnado del campo agreement para responsive*/
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

export default SignupForm;
