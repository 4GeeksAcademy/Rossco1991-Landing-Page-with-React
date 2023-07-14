import React from "react";



export const Repeated = (img = "", title="", description="", button="") => {

  return (
      <div className="card text-center h-100">
        <img src={props.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer bg-white">
          <a href="#" className="btn btn-primary">{props.button}</a>
        </div>
      </div>
  )
}
