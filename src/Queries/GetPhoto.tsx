// Unsplash has a limited amount of photos, so the query must be generic.
// Query only uses make and model props.
import { useEffect, useState } from "react";

interface GetPhotoProps {
  year: string;
  make: string;
  model: string;
  isModelSelected: boolean;
}

export default function GetPhoto({ year, make, model, isModelSelected }: GetPhotoProps) {
  const UNSPLASH_API_KEY: string = import.meta.env.VITE_UNSPLASH_API_KEY;
  const [photo, setPhoto] = useState<string>();

  useEffect(() => {
    const getPhotoQuery = async () => {
      try {
        await fetch(
          `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&query=${make}%20${model}%20orientation=landscape`
        )
          .then((response) => response.json())
          .then((data) => setPhoto(data.urls.small));
      } catch (err) {
        console.error(err);
      }
    };

    getPhotoQuery();
  }, []);

  return (
    <img className="border border-2 border-primary-subtle" src={photo} alt={`${year} ${make} ${model}`}></img>
  );
}
