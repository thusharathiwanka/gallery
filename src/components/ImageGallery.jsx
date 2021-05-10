import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGallery = ({ setClickedImage }) => {
	const { images } = useFirestore("images");
	console.log(images);
	return (
		<div className="img-grid">
			{images &&
				images.map((image) => {
					return (
						<div
							className="img-container"
							key={image.id}
							onClick={() => setClickedImage(image.url)}
						>
							<img src={image.url} alt={image.id} />
						</div>
					);
				})}
		</div>
	);
};

export default ImageGallery;
