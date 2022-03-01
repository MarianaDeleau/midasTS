import { FC } from "react";
import { Card, Tooltip } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { Post } from "../../types/models";

const { Meta } = Card;

type Props = {
	data: Post[];
};

const NewsCard: FC<Props> = ({ data }) => {
	return (
		<>
			{data?.map((n) => {
				return (
					<Tooltip placement="topLeft" title={n.title} key={n.uuid}>
						<Link to={`news/${n.uuid}`}>
							<Card
								key={n.uuid}
								style={{ ...{ width: 383 } }}
								cover={
									<div style={{ height: 200, overflow: "hidden" }}>
										<img
											alt={"News"}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={
												n.thread?.main_image ||
												"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu_8zZNQHQ1BckEqfXnnf1gq_NdiuD0XoOIi55W0h0ByWRqtslfT5Yl9TqbwxwOf9idk&usqp=CAU"
											}
										/>
									</div>
								}
							>
								<Meta
									title={n.title}
									description={
										<div>
											<p>{`${n.text?.substring(0, 300)}... `}</p>
											<p
												style={{
													position: "absolute",
													bottom: 0,
													right: 20,
													fontWeight: "bold",
												}}
											>
												{moment(n.published).format("L")}
											</p>
										</div>
									}
								/>
							</Card>
						</Link>
					</Tooltip>
				);
			})}
		</>
	);
};

export default NewsCard;
