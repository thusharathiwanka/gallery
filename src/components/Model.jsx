import React from "react";
import { motion } from "framer-motion";

const Model = ({ clickedImage, setClickedImage }) => {
	const handleShadowClick = (e) => {
		if (e.target.classList.contains("shadow")) {
			setClickedImage(null);
		}
	};

	return (
		<div>
			{clickedImage && (
				<motion.div
					className="shadow"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={handleShadowClick}
				>
					<motion.img
						src={clickedImage}
						alt={`enlarged-${clickedImage}`}
						initial={{ y: "-100vh" }}
						animate={{ y: 0 }}
					/>
				</motion.div>
			)}
		</div>
	);
};

export default Model;
