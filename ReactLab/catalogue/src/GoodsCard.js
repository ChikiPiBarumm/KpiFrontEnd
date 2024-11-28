import React from "react";

const GoodsCard = ({ image, name, price }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>Ціна: {price} грн</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    color: "#888",
  },
};

export default GoodsCard;
