import { useEffect, useState } from "react";

export default function GetPhoto() {
  const UNSPLASH_API_KEY: string = import.meta.env.VITE_UNSPLASH_API_KEY;
  const [photo, setPhoto] = useState<Promise<any>>();

  useEffect(() => {
    const getPhotoQuery = async () => {
      await fetch(
        `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}`,
        {
          headers: {
            count: "1",
            // Unsplash does not find cars by year / make / model. Only model.
            query: "camry",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    };

    getPhotoQuery();
  }, []);

  return <div></div>;
}
