import "./styles.scss";
import { RiTimerFlashLine } from "react-icons/ri"
import { BsPeople } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";

interface CardItemProps {
	title: string;
	description: string;
	image: string;
	time: number;
	peoples: number;
	avaliation: number;
}

export function CardLocal({ title, description, image, time, avaliation, peoples }: CardItemProps) {
	return (
		<div className="container-item">
			<img src={image} alt="" />
			<h2>{title}</h2>
			<div className="description-box">
				<p>{description}</p>
				<div className="star-box">
					<AiFillStar size={20} color={avaliation > 4 ? "#1AC84B" : "#FC8019"} />
					<p>{avaliation}</p>
				</div>
			</div>
			<div className="value-and-time">
				<div className="item-box">
					<RiTimerFlashLine size={24} color="#FC8019" />
					<p>{time} Min</p>
				</div>
				<div className="item-box">
					<BsPeople size={20} color="#FC8019" />
					<p>{peoples} Pessoas</p>
				</div>
			</div>
		</div>
	)
}