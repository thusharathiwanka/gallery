import { useState, useEffect } from "react";
import { appStorage } from "../firebase/config";

const useStorage = (selectedFile) => {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null);
   const [url, setUrl] = useState(null);

   useEffect(() => {
      const storageRef = appStorage.ref(selectedFile.name);

      storageRef.put(selectedFile).on(
         "state_changed",
         (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
         },
         (error) => {
            setError(error);
         },
         async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
         }
      );
   }, [selectedFile]);

   return { progress, url, error };
};

export default useStorage;
