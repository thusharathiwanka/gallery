import React from "react";

const Model = ({ clickedImage, setClickedImage }) => {
	const handleShadowClick = (e) => {
		if (e.target.classList.contains("shadow")) {
			setClickedImage(null);
		}
	};

	return (
		<div>
			{clickedImage && (
				<div className="shadow" onClick={handleShadowClick}>
					<img src={clickedImage} alt={`enlarged-${clickedImage}`} />
				</div>
			)}
		</div>
	);
};

export default Model;
