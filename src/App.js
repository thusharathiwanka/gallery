import { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";

function App() {
	const [clickedImage, setClickedImage] = useState(null);

	return (
		<div className="App">
			<Navbar />
			<UploadForm />
			<ImageGallery setClickedImage={setClickedImage} />
			<Model clickedImage={clickedImage} setClickedImage={setClickedImage} />
		</div>
	);
}

export default App;
