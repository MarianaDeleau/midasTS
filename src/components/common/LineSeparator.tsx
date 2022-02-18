import React, { FC } from "react";

type Props = {
	size: string;
};

const LineSeparator: FC<Props> = ({ size }) => {
	return (
		<div
			style={{
				...{ width: size === "big" ? "100%" : "100px" },
				...styles.container,
			}}
		/>
	);
};

const styles = {
	container: {
		margin: "20px auto",
		height: 1,
		backgroundColor: "#535C68",
	},
};

export default LineSeparator;
