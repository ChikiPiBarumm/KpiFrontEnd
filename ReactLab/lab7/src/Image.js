import React, { useState } from "react";

function Image() {
  const [images, setImages] = useState([{ id: 1, size: 200 }]);

  const addImage = () => {
    setImages([...images, { id: Date.now(), size: 200 }]);
  };

  const increaseSize = (id) => {
    setImages(
      images.map((img) =>
        img.id === id ? { ...img, size: img.size + 20 } : img
      )
    );
  };

  const decreaseSize = (id) => {
    setImages(
      images.map((img) =>
        img.id === id ? { ...img, size: Math.max(img.size - 20, 50) } : img
      )
    );
  };

  const deleteImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div>
      {images.map((img) => (
        <div key={img.id} style={{ marginBottom: "10px" }}>
          <img
            src="/rome.jpg"
            alt="Dynamic"
            width={img.size}
            height={img.size}
          />
          <div>
            <button onClick={() => increaseSize(img.id)}>Збільшити</button>
            <button onClick={() => decreaseSize(img.id)}>Зменшити</button>
            <button onClick={() => deleteImage(img.id)}>Видалити</button>
          </div>
        </div>
      ))}
      <button onClick={addImage}>Додати зображення</button>
    </div>
  );
}

export default Image;
