import "./Devices.card.css";
import React from "react";

function DevicesCard({devices}) {
  const {id,price,isAvailable,createdAt,color,brand,ram,picture} = devices;
  return (
    <p className="devices-card">
      <h1>{brand}</h1>
      <h3>Price:{price}$</h3>
      <h4>Stock:{isAvailable}</h4>
      <h4>Date:{createdAt}</h4>
      <h4>Color:{color}</h4>
      <h3>Storage:{ram}RAM</h3>
      <h5>Device ID:{id}</h5>
      <img src={picture}/>
    </p>
  );
};

export default DevicesCard;
