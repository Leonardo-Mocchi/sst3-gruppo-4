import React, { createContext, useState, useContext, useEffect } from "react";
import travelsData from "../data/db_travels";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [travels, setTravels] = useState(travelsData);
  const [showForm, setShowForm] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get the form data
    const formData = new FormData(e.target);
    const newTravel = {
      id: travels.length + 1,
      destination: capitalizeFirstLetter(formData.get("destination")),
      start_trip: formData.get("start_trip"),
      end_trip: formData.get("end_trip"),
      notes: formData.get("note"),
      partecipants: [],
      image: `https://placehold.co/600x600?text=${capitalizeFirstLetter(formData.get("destination"))}`
    };

    // Update the state with the new travel
    setTravels((prevTravels) => [...prevTravels, newTravel]);
    e.target.reset(); // Reset the form after submission

    setShowForm(false); // Close the form after submission
  }

  const handleSubmitPartecipant = (e, travelId) => {
    e.preventDefault();

    const numericTravelId = Number(travelId);

    const formData = new FormData(e.target);
    const newPartecipant = {
      id: Date.now(),
      name: capitalizeFirstLetter(formData.get("name")),
      surname: capitalizeFirstLetter(formData.get("surname")),
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      fiscal_code: formData.get("fiscal_code") || "",
      notes: formData.get("note") || "",
    };

    console.log("Adding participant to travel ID:", numericTravelId);
    console.log("New participant:", newPartecipant);

    const travelExists = travels.some(travel => travel.id === numericTravelId);
    
    if (!travelExists) {
      console.error(`Travel with ID ${numericTravelId} not found!`);
      return;
    }

    setTravels(prevTravels => {
      return prevTravels.map(travel => {
        if (travel.id === numericTravelId) {
          console.log("Found travel to update:", travel);
          const updatedTravel = {
            ...travel,
            partecipants: [...travel.partecipants, newPartecipant]
          };
          console.log("Updated travel:", updatedTravel);
          return updatedTravel;
        }
        return travel;
      });
    });

    e.target.reset();
  };

  return (
    <GlobalContext.Provider value={{ travels, setTravels, showForm, setShowForm, handleSubmit, handleSubmitPartecipant }}>
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
