import React, { useEffect, useState } from "react";

function ImagesDiv({ page }) {
  const [images, setImages] = useState([]);
  const url = `https://picsum.photos/v2/list?page=${page}&limit=5`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, [url]);
  return (
    <ul className="w-[90%] gap-4 md:grid md:grid-rows-3 md:gap-6 md:grid-cols-3 md:h-[45rem] md:w-[80%] m-auto">
      {images.map((image, i) => (
        <li
          className={`${
            i === 0
              ? "col-start-1 col-end-3 row-start-1 row-end-3 "
              : ""
          } ${
            i === 4
              ? "col-start-2 col-end-4 md:ml-[120px]"
              : ""
          } ${
            i === 3 ? "md:mr-[-80px]" : ""
          } inline-block `}
          key={image.id}
        >
          <img
            src={image.download_url}
            className={`w- md:w-full h-full object-fill`}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImagesDiv;
