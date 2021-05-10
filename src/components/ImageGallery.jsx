import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGallery = ({ setClickedImage }) => {
	const { images } = useFirestore("images");
	console.log(images);
	return (
		<div className="img-grid">
			{images &&
				images.map((image) => {
					return (
						<motion.div
							className="img-container"
							layout
							key={image.id}
							onClick={() => setClickedImage(image.url)}
							whileHover={{ opacity: 1 }}
						>
							<motion.img
								src={image.url}
								alt={image.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							/>
						</motion.div>
					);
				})}
		</div>
	);
};

export default ImageGallery;
