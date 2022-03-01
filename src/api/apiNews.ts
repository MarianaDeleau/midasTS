import { apiNews } from "../utils/axios";

const getNews = async () => {
	const response = await apiNews.get("http://localhost:8000/api/noticias");
	return response;
};

export { getNews };
