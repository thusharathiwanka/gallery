import { useState, useEffect } from "react";
import { appFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const unsubscribe = appFirestore
			.collection(collection)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				let documentItems = [];
				snap.forEach((documentItem) => {
					documentItems.push({ ...documentItem.data(), id: documentItem.id });
				});
				setImages(documentItems);
			});

		return () => unsubscribe();
	}, [collection]);

	return { images };
};

export default useFirestore;
