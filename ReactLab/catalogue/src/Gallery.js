import React from "react";
import GoodsCard from "./GoodsCard";

const Gallery = () => {
  const goods = [
    {
      id: 1,
      name: "Смартфон Samsung Galaxy S24",
      price: "37999",
      image: "/Media/galaxy.jpg",
    },
    {
      id: 2,
      name: "Ноутбук Apple MacBook Air",
      price: "67999",
      image: "/Media/macbook.jpg",
    },
    {
      id: 3,
      name: "Телевізор LG OLED55",
      price: "64999",
      image: "/Media/tv.jpg",
    },
    {
      id: 4,
      name: "Планшет iPad Pro",
      price: "75999",
      image: "/Media/ipadPro.jpg",
    },
    {
      id: 5,
      name: "Фітнес-браслет Xiaomi Mi Band 8 Pro",
      price: "3899",
      image: "/Media/MiBand8.jpg",
    },
    {
      id: 6,
      name: "Навушники Sony WH-1000XM4",
      price: "13699",
      image: "/Media/SonyXM4.jpg",
    },
  ];

  return (
    <div style={styles.gallery}>
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Gallery;
