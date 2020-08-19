import React from "react";

function Card({ image, topic, ques, time }) {
  return (
    <div className="card" className="card">
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="content">
        <div className="title">{topic}</div>
        <div className="footer">
          <div className="ques">{ques}</div>
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
