import "./styles.scss";
import { GiPriceTag } from "react-icons/gi"
import { RiTimerFlashLine } from "react-icons/ri"

interface CardItemProps {
	title: string;
	description: string;
	image: string;
	value: number;
	time: number;
}

export function CardItem({ title, description, image, time, value }: CardItemProps) {
	return (
		<div className="container-item">
			<img src={image} alt="" />
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="value-and-time">
				<div className="item-box">
					<GiPriceTag size={24} color="#FC8019" />
					<p>{value.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
				</div>
				<div className="item-box">
					<RiTimerFlashLine size={24} color="#FC8019" />
					<p>{time} Min</p>
				</div>
			</div>
		</div>
	)
}