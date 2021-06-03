import { useState, useEffect } from "react";
import { appStorage, appFirestore, timestamp } from "../firebase/config";

const useStorage = (selectedFile) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const storageRef = appStorage.ref(selectedFile.name);
		const collectionRef = appFirestore.collection("images");

		storageRef.put(selectedFile).on(
			"state_changed",
			(snap) => {
				let percentage = Math.floor(
					(snap.bytesTransferred / snap.totalBytes) * 100
				);
				setProgress(percentage);
			},
			(error) => {
				setError(error);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();
				await collectionRef.add({ url, createdAt });
				setUrl(url);
			}
		);
	}, [selectedFile]);

	return { progress, url, error };
};

export default useStorage;
