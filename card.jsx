import React from "react";

const CardTutorial = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "13rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.descripsi}</p>
          <a href="" className="btn btn-primary">
            Pesan
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardTutorial;
