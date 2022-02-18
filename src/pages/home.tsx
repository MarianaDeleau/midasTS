import { FC } from "react";
import { Spin } from "antd";
import Header from "../components/layout/Header";
import MainNews from "../components/parts/MainNews";
import NewsCard from "../components/parts/NewsCard";
import InfiniteScroll from "react-infinite-scroller";
import LineSeparator from "../components/common/LineSeparator";
import IdleTimerContainer from "../components/parts/IdleTimerContainer";
import { useNews } from "../hooks/useNews";

const Home: FC = (props) => {
	const { filteredData, newsToShow, searchNews, setNewsToShow, loading } =
		useNews();

	const cards = filteredData?.filter((x, idx) => idx > 4 && idx <= newsToShow);

	const numberOfNews = cards?.length;

	return loading ? (
		<div className={"spin-container"}>
			<Spin size="large" />
		</div>
	) : (
		<div /*style={style}*/>
			<IdleTimerContainer />{" "}
			{/*Componente encargado de cerrar sesión por inactividad*/}
			<Header handleSearch={searchNews} />
			<div className={"body-home"}>
				{numberOfNews! > 0 && (
					<div>
						<MainNews
							data={filteredData!} //Datos a renderizar (unicamente primeros 5)
						/>

						<LineSeparator size={"small"} />

						{numberOfNews! > 5 ? (
							<div>
								<h2>Más Noticias</h2>
								<InfiniteScroll
									className={"news-container"}
									key={0}
									pageStart={0}
									loadMore={() => setNewsToShow(newsToShow + 10)}
									hasMore={newsToShow <= filteredData!.length}
									loader={
										<div className={"spin-loader-more-container"}>
											<Spin size="large" />
										</div>
									}
								>
									<NewsCard data={cards!} />
								</InfiniteScroll>
							</div>
						) : (
							<h2>
								Modifique los patrones de búsqueda para obtener más resultados
							</h2>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export const HomePage = Home;
