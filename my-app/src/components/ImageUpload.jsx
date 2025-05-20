"use client";

import { useEffect, useState } from "react";
import { IoCameraOutline, IoAdd } from "react-icons/io5";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null); 

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setImage(data); 
    setFile(null);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch("/api/get-images");
      const data = await res.json();
      if (data.length > 0) {
        setImage(data[0]); 
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="relative">
      {image ? (
        <img
          src={image.imageUrl}
          alt="Uploaded"
          className="w-40 h-40 right-[34rem] -top-[80px] absolute rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center gap-4 relative">
          <label className="cursor-pointer inline-flex w-36 h-36 items-center px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-200 shadow-sm absolute -right-[4rem]">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className="text-7xl mx-auto text-gray-700">
              <IoAdd />
            </span>
          </label>

          <button
            onClick={handleUpload}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition top-[40px] absolute"
          >
            <IoCameraOutline size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
