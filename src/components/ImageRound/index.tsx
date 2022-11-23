import "./styles.scss";

interface ImageRoundProps {
	image: string;
	title: string;
}

export function ImageRound({ image, title }: ImageRoundProps) {
	return (
		<div className="image-container">
			<img src={image} alt="" />
			<h4>{title}</h4>
		</div>
	)
}