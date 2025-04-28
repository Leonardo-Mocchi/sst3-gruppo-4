import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import AddPartecipantForm from '../components/AddPartecipantForm';
import Popup from '../components/Popup';

export default function SingleTravel() {
  const { travels, showForm, setShowForm, handleSubmitPartecipant } = useGlobalContext();
  const { id } = useParams();
  const travelId = Number(id);
  const navigate = useNavigate();
  const travel = travels.find((travel) => travel.id === travelId);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredParticipants, setFilteredParticipants] = useState([]);

  useEffect(() => {
    if (!travel) {
      navigate('/not-found', { replace: true });
    }
  }, [travel, navigate]);

  useEffect(() => {
    if (travel) {
      setFilteredParticipants(travel.partecipants);
    }
  }, [travel?.partecipants]);

  if (!travel) {
    return null;
  }

  // Function to handle search on button click
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredParticipants(travel.partecipants);
      return;
    }

    const filtered = travel.partecipants.filter((partecipant) =>
      `${partecipant.name} ${partecipant.surname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filtered);
  };

  return (
    <>
      <main className="container mt-5" style={{ width: "60%" }}>
        <div className="d-flex align-items-center my-4 m-auto justify-content-start">
          <img
            src={travel.image}
            alt={travel.destination}
            className="rounded shadow"
            style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }}
          />
          <div className='d-flex align-items-center justify-content-between w-100'>
            <div>
              <h2>
                {travel.destination}
              </h2>
              <p>
                Dal <strong>{new Date(travel.start_trip).toLocaleDateString()} </strong> al <strong>{new Date(travel.end_trip).toLocaleDateString()}</strong>
              </p>
            </div>
            <div>
              <p>
                Numero Partecipanti: <strong>{travel.partecipants.length}</strong>
              </p>
              <p className='text-muted'>
                {travel.notes?.length > 0 && `Note: ${travel.notes}`}
              </p>
            </div>
          </div>

        </div>



        <Popup isOpen={showForm} onClose={() => setShowForm(false)}>
          <AddPartecipantForm handleSubmitPartecipant={(e) => handleSubmitPartecipant(e, travelId)} />
        </Popup>





        {/* Search Input */}
        <div className="my-4 d-flex align-items-center justify-content-between">
          <div style={{ width: "85%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Cerca partecipante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ width: "14%" }}>
            <button className="btn btn-secondary px-0 d-flex justify-content-center align-items-center border-0" onClick={handleSearch}
              style={{ width: "100%", backgroundColor: "var(--color-secondary-light)" }}>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Partecipants list */}
        <div className="accordion mx-auto" id="accordionPanelsStayOpenExample">
          {/* Create travel button to display the form when partecipants are less than 15 */}
          {filteredParticipants.length < 15 ? (
            <div className='text-center mt-2 rounded-3'>
              <button
                className="btn text-secondary"
                style={{ width: "100%", padding: "0.5rem 1rem", backgroundColor: "var(--color-secondary-bg)", border: "dashed 1px var(--color-secondary-light)" }}
                type="button"
                onClick={() => setShowForm(!showForm)}
              >

                <span>
                  <i className="bi bi-plus-lg" style={{ marginRight: "5px" }}></i>
                  Aggiungi Partecipante
                </span>

              </button>
            </div>
          ) : null}
          {[...filteredParticipants].reverse().map((partecipant) => (

            <div className="accordion-item mt-2 rounded-3" key={partecipant.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed rounded-3"
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

        </div>


        {/* Home button */}
        <div className="d-flex justify-content-start mt-1">
          <Link to={"/"} className='text-decoration-none text-dark'>
            <button className='btn btn-outline-dark mt-4'> <i className="bi bi-arrow-left"> </i> Torna alla Home </button>
          </Link>
        </div>

      </main>
    </>
  );
}