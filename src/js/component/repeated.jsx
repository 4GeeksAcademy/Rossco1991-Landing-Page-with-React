import React, { useState } from "react";
import PropTypes from 'prop-types';



export const Repeated = props => {

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

Repeated.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,

}