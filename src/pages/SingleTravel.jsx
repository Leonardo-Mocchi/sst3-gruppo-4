import { useState } from 'react'
import { useParams } from "react-router-dom";
import travels from "../data/db_travels";

export default function SingleTravel() {
  const { id } = useParams();

  const travel = travels.find((travel) => travel.id === Number(id));

  const [searchTerm, setSearchTerm] = useState("");

  const filteredParticipants = travel.partecipants.filter((partecipant) =>
    `${partecipant.name} ${partecipant.surname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row d-flex py-4">
          <div className="col-12 col-md-8">
            <h2>Dettagli viaggio</h2>
            <div className="card p-3">
              <div className="card-top">
                <h4>{travel.destination}</h4>
                <div className="card-body p-0">
                  <p>Dal {new Date(travel.start_trip).toLocaleDateString()}</p>
                  <p>Al {new Date(travel.start_trip).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia blanditiis atque, repellat officia pariatur eos, quidem esse illo voluptatem impedit dolores? Modi reiciendis ullam dolore ducimus quas beatae ea!
          </div>
        </div>

        <hr />


        {/* Search Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cerca partecipante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="accordion" id="accordionPanelsStayOpenExample">
          {filteredParticipants.map((partecipant) => (
            <div className="accordion-item" key={partecipant.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${partecipant.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${partecipant.id}`}
                >
                  {partecipant.name} {partecipant.surname}
                </button>
              </h2>
              <div
                id={`collapse${partecipant.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <p className="card-text">Email: {partecipant.email}</p>
                  <p className="card-text">Telefono: {partecipant.phone}</p>
                  <p className='card-text'>Codice Fiscale: {partecipant.fiscal_code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}