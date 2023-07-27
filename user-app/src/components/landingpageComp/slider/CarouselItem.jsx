import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width}}>
      <div>
      </div>
      <div className="carousel-det">
      <div className="img-det">
        <img className="carousel-img" src={require("../../../assets/" + item.image + `.png`)}  alt="BlogImg"  />1
      </div>
      <div className="carousel-item-text">
      <h4>{item.CandidateName}</h4> 
      <p style={{marginBottom:'10px',fontSize:'15px', fontFamily:"lato",color:'#727479',fontStyle:"italic"}}>{item.Mode}</p>
      <p style={{fontSize:'15px', fontFamily:"lato",lineHeight:'1.5rem',color:"#4B4D52"}}>{item.description}</p>
        <p style={{marginTop:"10px",fontSize:'15px', fontFamily:"lato",lineHeight:'1.5rem',color:"#4B4D52"}}>{item.Comment}</p>
      </div>
      </div>
    </div>
  );
};