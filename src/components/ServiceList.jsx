import React from "react";

const ServiceList = ({ services, onDelete, onEdit }) => {
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this service?");
    if (confirmDelete) {
      onDelete(index);
    }
  };

  return (
    <div>
      <h2 className="text-[crimson] text-xl p-2" >Healthcare Services</h2>
      <ul className="service-list flex flex-row gap-3 p-4">
        {services.map((service, index) => ( 
          <li className=" hover:scale-95 transition-all" key={service.name}> {/* Use a unique identifier if available */}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <div className="modifybtn flex hover">
            <button className="bg-slate-500 inline" onClick={() => onEdit(index)}>Edit</button>
            <button className=" relative bg-red-600" onClick={() => handleDelete(index)} aria-label={`Delete ${service.name}`}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;