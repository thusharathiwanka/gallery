import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
   const [file, setFile] = useState(null);
   const allowedTypes = ["image/png", "image/jpeg"];
   const [error, setError] = useState("");

   const handleUpload = (e) => {
      console.log(e.target.files);

      let selectedPicture = e.target.files[0];

      if (selectedPicture && allowedTypes.includes(selectedPicture.type)) {
         setFile(selectedPicture);
         setError("");
      } else {
         setFile("");
         setError("Please select an image file");
      }
   };

   return (
      <form>
         <label htmlFor="picture"></label>
         <input
            type="file"
            name="picture"
            id="picture"
            onChange={handleUpload}
            accept="image/*"
         />
         <div className="status">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
         </div>
      </form>
   );
};

export default UploadForm;
