import React, { useState } from "react";



export const Repeated = (data=[]) => {

  return (
      <div className="card text-center h-100">
        <img src={data.image} key={idx} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
        <div className="card-footer bg-white">
          <a href="#" className="btn btn-primary">{data.button}</a>
        </div>
      </div>
  )
}
