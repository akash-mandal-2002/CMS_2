"use client";

import { useEffect, useState } from "react";
import { IoCameraOutline, IoAdd } from "react-icons/io5";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setImages((prev) => [data, ...prev]);
    setFile(null);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/get-images");
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6 relative">
        {images.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.imageUrl}
                  alt={`Uploaded ${index}`}
                  className="md:w-40 md:h-40 w-20 h-20 rounded-full object-cover absolute -top-[5rem] -right-[4rem]"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <label className="cursor-pointer inline-flex md:w-36 md:h-36 w-24 h-24 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200 shadow-sm absolute -top-[5rem] -right-[3rem] md:-right-[4rem]">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="md:text-7xl text-4xl text-gray-700">
                <IoAdd />
              </span>
            </label>

            <button
              onClick={handleUpload}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md absolute"
            >
              <IoCameraOutline className="text-xl md:text-2xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
