import { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import travels from "../data/db_travels";

export default function SingleTravel() {
  const { id } = useParams();
  const travel = travels.find((travel) => travel.id === Number(id));
  const [searchTerm, setSearchTerm] = useState(""); // Input value
  const [filteredParticipants, setFilteredParticipants] = useState(travel.partecipants); // Filtered participants

  /* !!!!!!!!!!!!!! 404 !!!!!!!!!!!!!!!!!!! */
  const navigate = useNavigate()
  /* !!!!!!!!!!!!!! 404 !!!!!!!!!!!!!!!!!!! */

  // Function to handle search on button click
  const handleSearch = () => {
    const filtered = travel.partecipants.filter((partecipant) =>
      `${partecipant.name} ${partecipant.surname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filtered);
  };

  return (
    <>
      <div className="container">



        <div className="d-flex align-items-center my-4 justify-content-center">
          <img
            src={travel.image}
            alt={travel.destination}
            className="rounded-circle"
            style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }}
          />
          <div>
            <h2 className="mb-0">{travel.destination}</h2>
            <p className="mb-0">
              Dal <strong>{new Date(travel.start_trip).toLocaleDateString()} </strong> al <strong>{new Date(travel.end_trip).toLocaleDateString()}</strong>
            </p>
          </div>
        </div>

        {/*<div className="row d-flex py-4">
          <div className="col-12 col-md-8">
            <h2>Dettagli viaggio</h2>
            <div className="card p-3">
              <div className="card-top">
                <h1>{travel.destination}</h1>
                <div className="card-body p-0">
                  <p>
                    Dal <strong>{new Date(travel.start_trip).toLocaleDateString()} </strong> al <strong>{new Date(travel.start_trip).toLocaleDateString()}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia blanditiis atque, repellat officia pariatur eos, quidem esse illo voluptatem impedit dolores? Modi reiciendis ullam dolore ducimus quas beatae ea!
          </div>
        </div>
        <hr />
        */}



        {/* Search Input */}
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control rounded-end-0"
            style={{ maxWidth: "300px" }}
            placeholder="Cerca partecipante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-warning rounded-start-0" onClick={handleSearch}>
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="accordion mb-5 mx-auto" id="accordionPanelsStayOpenExample"
          style={{ maxWidth: "500px" }}>
          {filteredParticipants.map((partecipant) => (
            <div className="accordion-item" key={partecipant.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${partecipant.id}`}
                  aria-expanded="false"
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
                  <p className="card-text">
                    <i className="bi bi-envelope me-2"></i> <span className='fw-semibold'>Email:</span> {partecipant.email}</p>
                  <p className="card-text">
                    <i className="bi bi-telephone me-2"></i> <span className='fw-semibold'>Telefono:</span> {partecipant.phone}</p>
                  <p className='card-text'>
                    <i className="bi bi-card-text me-2"></i> <span className='fw-semibold'>Codice Fiscale:</span> {partecipant.fiscal_code}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <Link to={"/"} className='text-decoration-none text-dark'>
              <button className='btn btn-outline-dark mt-4'> <i className="bi bi-arrow-left"> </i> Torna alla Home </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}