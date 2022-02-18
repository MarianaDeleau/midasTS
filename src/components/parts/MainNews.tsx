import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Post } from "../../types/models";

type Props = {
	data: Post[];
};

const MainNews: FC<Props> = ({ data }) => {
	// RESPONSIVE
	const isMediumSize = useMediaQuery({
		query: "(max-device-width: 900px)",
	});

	const isSmallSize = useMediaQuery({
		query: "(max-device-width: 530px)",
	});

	const renderLittleNews = () => {
		//DESDE SEGUNDA NOTICIA A CUARTA
		const news = data.filter((x: any, idx: any) => idx >= 1 && idx <= 4);

		return news.map((x: Post, idx: any) => (
			<Link
				key={idx}
				style={{
					...{
						position: "relative",
						padding: 1,
						width: "50%",
						height: "50%",
						overflow: "hidden",
					},
					...(isMediumSize && {
						width: "50%",
						height: 200,
					}),
					...(isSmallSize && {
						width: "100%",
						height: 150,
					}),
				}}
				to={`news/${x.uuid}`}
			>
				<span
					style={{
						...{
							position: "absolute",
							bottom: 0,
							padding: 20,
							width: "100%",
							color: "white",
							backgroundColor: "rgba(0,0,0,.5)",
						},
						...{ fontSize: 16 },
					}}
				>
					{x.title?.substring(0, 50)}...
				</span>
				<img
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
					src={
						x.thread?.main_image ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu_8zZNQHQ1BckEqfXnnf1gq_NdiuD0XoOIi55W0h0ByWRqtslfT5Yl9TqbwxwOf9idk&usqp=CAU"
					}
					alt={"News"}
				/>
			</Link>
		));
	};

	return (
		<div
			style={{
				...{
					display: "flex",
					flexWrap: "wrap",
					width: "100%",
				},
				...(isMediumSize && { flexDirection: "column" }),
			}}
		>
			{/*PRIMER NOTICIA*/}
			<Link
				to={`news/${data[0].uuid}`}
				style={{
					...{
						display: "flex",
						flexWrap: "wrap",
						position: "relative",
						width: "50%",
						height: 400,
						overflow: "hidden",
					},
					...(isMediumSize && {
						width: "100%",
						height: 300,
					}),
				}}
			>
				<img
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
					src={
						data[0].thread?.main_image ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu_8zZNQHQ1BckEqfXnnf1gq_NdiuD0XoOIi55W0h0ByWRqtslfT5Yl9TqbwxwOf9idk&usqp=CAU"
					}
					alt={"News"}
				/>
				<span
					style={{
						...{
							position: "absolute",
							bottom: 0,
							padding: 20,
							width: "100%",
							color: "white",
							backgroundColor: "rgba(0,0,0,.5)",
						},
						...{ fontSize: 18 },
					}}
				>
					{data[0].title}
				</span>
			</Link>
			<div
				style={{
					...{ padding: 1 },
					...{
						display: "flex",
						flexWrap: "wrap",
						position: "relative",
						width: "50%",
						height: 400,
						overflow: "hidden",
					},
					...(isMediumSize && {
						width: "100%",
						height: "auto",
					}),
				}}
			>
				{renderLittleNews()}
			</div>
		</div>
	);
};

export default MainNews;
