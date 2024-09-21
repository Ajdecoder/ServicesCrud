import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css'

const ServiceForm = ({ onSubmit, service }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
    }
  }, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = { name, description, price };
      onSubmit(newService);
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Service Name" 
        required 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Price" 
        required 
      />
      <button className='m-auto p-4 bg-black text-white rounded-[10px]' type="submit">Submit</button>
    </form>
  );
};

// PropTypes for ServiceForm component
ServiceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default ServiceForm;
