import { useEffect, useState } from "react";
import { getNews } from "../api/apiNews";
import { Post } from "../types/models";

const useNews = () => {
	const [data, setData] = useState<Post[]>([]);
	const [filteredData, setFilteredData] = useState<Post[] | undefined>();
	const [newsToShow, setNewsToShow] = useState<number>(10);
	const [loading, setLoading] = useState<Boolean>(true);

	useEffect(() => {
		getNews()
			.then((response) => {
				let data = response.data.posts; //Guardamos posts en constante data

				// Ordenamos data por relevancia
				const orderedData = data.sort(function (a: Post, b: Post) {
					return b.thread?.domain_rank! - a.thread?.domain_rank!;
				});
				setData(orderedData);
				setFilteredData(orderedData);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const searchNews = (value: string) => {
		//Filtramos por título y texto
		let newData = data.filter(
			(x: Post) => x.title?.includes(value) || x.text?.includes(value)
		);
		setFilteredData(newData);
	};

	return {
		data,
		filteredData,
		setFilteredData,
		newsToShow,
		setNewsToShow,
		searchNews,
		loading,
	};
};

export { useNews };
