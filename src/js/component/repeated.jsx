import React, { useState } from "react";


export const Card= (props) => {

  

  return (
      <div className="card text-center mx-3">
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer bg-white">
          <a href="#" className="btn btn-primary">{props.button}</a>
        </div>
      </div>
  )
}
