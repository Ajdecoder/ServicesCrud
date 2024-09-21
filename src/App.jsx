import React, { useEffect, useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";

const App = () => {
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem("services");
    return savedServices ? JSON.parse(savedServices) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Load services from localStorage on initial render
  useEffect(() => {
    try {
      const savedServices = localStorage.getItem("services");
      if (savedServices) {
        setServices(JSON.parse(savedServices));
      }
    } catch (error) {
      console.error("Failed to parse services from localStorage", error);
    }
  }, []);

  // Save services to localStorage whenever the services array changes
  useEffect(() => {
    window.localStorage.setItem("services", JSON.stringify(services));
    console.log("Saving services to localStorage:", services);
  }, [services]);

  const addOrUpdateService = (newService) => {
    if (editingIndex !== null) {
      const updatedServices = services.map((service, index) =>
        index === editingIndex ? newService : service
      );
      setServices(updatedServices);
      setEditingIndex(null);
    } else {
      const updatedServices = [...services, newService];
      setServices(updatedServices);
      console.log("Updated services state:", updatedServices);
    }
  };

  const deleteService = (index) => {
    setServices(services.filter((_,i) => i !== index));
  };

  const editService = (index) => {
    setEditingIndex(index);
  };

  return (
    <div>
      <h1 className="box">Healthcare Services Management</h1>
      <ServiceForm
        onSubmit={addOrUpdateService}
        service={editingIndex !== null ? services[editingIndex] : null}
      />
      <ServiceList
        services={services}
        onDelete={deleteService}
        onEdit={editService}
      />
    </div>
  );
};

export default App;
