import { FC } from "react";
import { Button, Input /*Tooltip*/ } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import RegularSeparator from "../common/RegularSeparator";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const { Search } = Input;

type Props = {
	handleSearch: (s: string) => void;
};

const Header: FC<Props> = ({ handleSearch }) => {
	const { logout } = useUsers();

	return (
		<div className={"header-container"}>
			<div className={"header-content"}>
				<Link to={`/home`} className={"logo-button"}>
					<img
						alt={"logo"}
						height={"100%"}
						src={
							"https://i.ya-webdesign.com/images/news-transparent-white-1.png"
						}
					/>
				</Link>

				{
					<div style={styles.searcherContainer}>
						<Search
							placeholder="Buscar"
							onSearch={(value) => handleSearch(value)}
							size={"large"}
						/>
						<RegularSeparator />
					</div>
				}

				<Button
					type="default"
					onClick={logout}
					ghost
					style={{ fontWeight: "bold" }}
					loading={false}
					shape="round"
					icon={<LoginOutlined />}
				>
					<span className={"sesion-button-txt"}>Cerrar sesión</span>
				</Button>
			</div>
		</div>
	);
};

const styles = {
	searcherContainer: {
		display: "flex",
		alignItems: "center",
		width: "60%",
	},
};

export default Header;
