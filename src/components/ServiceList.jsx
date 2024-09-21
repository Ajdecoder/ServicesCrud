// src/ServiceList.js
import React from 'react';

const ServiceList = ({ services, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Healthcare Services</h2>
      <ul className='service-list'>
        {services.map((service, index) => (
          <li key={index} >
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
