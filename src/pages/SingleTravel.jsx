import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import AddPartecipantForm from '../components/AddPartecipantForm';

export default function SingleTravel() {
  const { travels, showForm, setShowForm, handleSubmitPartecipant } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const travel = travels.find((travel) => travel.id === Number(id));

  useEffect(() => {
    if (!travel) {
      navigate('/not-found', { replace: true });
    }
  }, [travel, navigate]);

  if (!travel) {
    return null;
  }

  const [searchTerm, setSearchTerm] = useState(""); // Input value
  const [filteredParticipants, setFilteredParticipants] = useState(travel.partecipants); //Filtered partecipants

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
      <main className="container">
        <div className="d-flex align-items-center my-4 m-auto justify-content-start" style={{ maxWidth: "500px" }}>
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
            <p className='text-muted'>
              {travel.notes?.length > 0 && `Note: ${travel.notes}`}
            </p>
          </div>
        </div>


        {/* create travel button to display the form */}
        <div className='text-center mb-4'>
          <button
            className={"btn " + (showForm ? " btn-danger" : " btn-primary")} 
            style={{ padding: "0.25rem 1rem" }}
            type="button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? (
              <span>
                <i className="bi bi-x-lg" style={{ marginRight: "5px" }}></i>
                Annulla
              </span>
            ) : (
              <span>
                <i className="bi bi-plus-lg" style={{ marginRight: "5px" }}></i>
                Aggiungi Viaggio
              </span>
            )}
          </button>
        </div>
        
        {showForm && (

          <AddPartecipantForm handleSubmitPartecipant={handleSubmitPartecipant} />
        ) 

        }


        {/* Search Input */}
        <div className="mb-3 d-flex align-items-center m-auto justify-content-between" style={{ maxWidth: "500px" }}>
          <div style={{ width: "85%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Cerca partecipante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ width: "10%" }}>
            <button className="btn btn-warning px-0 d-flex justify-content-center align-items-center" onClick={handleSearch} style={{ width: "100%" }}>
              <i className="bi bi-search"></i>
            </button>
          </div>
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
                    <i className="bi bi-telephone me-2"></i> <span className='fw-semibold'></span> {partecipant.phone}
                  </p>
                  <p className="card-text">
                    <i className="bi bi-envelope me-2"></i> <span className='fw-semibold'></span> {partecipant.email}
                  </p>
                  <p className='card-text'>
                    <i className="bi bi-card-text me-2"></i> <span className='fw-semibold'></span> {partecipant.fiscal_code}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/*bottone di ritorno*/}
          <div className="d-flex justify-content-center">
            <Link to={"/"} className='text-decoration-none text-dark'>
              <button className='btn btn-outline-dark mt-4'> <i className="bi bi-arrow-left"> </i> Torna alla Home </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}