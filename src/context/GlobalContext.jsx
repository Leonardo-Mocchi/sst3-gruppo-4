import React, { createContext, useState, useContext, useEffect } from "react";
import travelsData from "../data/db_travels";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [travels, setTravels] = useState(travelsData);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get the form data
    const formData = new FormData(e.target);
    const newTravel = {
        id: travels.length + 1,
        destination: formData.get("destination"),
        start_trip: formData.get("start_trip"),
        end_trip: formData.get("end_trip"),
        note: formData.get("note"),
    };

    // Update the state with the new travel
    setTravels((prevTravels) => [...prevTravels, newTravel]);
    e.target.reset(); // Reset the form after submission
}

return (
    <GlobalContext.Provider value={{ travels, setTravels, showForm, setShowForm, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }

