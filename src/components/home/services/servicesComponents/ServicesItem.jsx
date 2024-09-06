import React from "react";
import { Link } from "react-router-dom";

function ServicesItem({ title, description, service, link }) {
  return (
    <div className="service-item">
      <h2 className="name-function">{title}</h2>
      <p className="description-function">{description}</p>
      <Link to={`/${link}`}>
        <button className="btnServices">{service}</button>
      </Link>
    </div>
  );
}

export default ServicesItem;
