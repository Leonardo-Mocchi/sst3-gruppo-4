import { useState } from 'react'
import { useParams } from "react-router-dom";
import travels from "../data/db_travels";

export default function SingleTravel() {
  const { id } = useParams();

  const travel = travels.find((travel) => travel.id === Number(id));

  const [search, setSearch] = useState("");


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

        <div className="container">
          <div className="col-12">

            <form>

              <div className="mb-3">
                <label htmlFor="new-post" className="form-label">Cerca</label>

                <input
                  type="text"
                  className="form-control"
                  name="new-post"
                  id="new-post"
                  placeholder="Cerca partecipante"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}

                />
              </div>

            </form>

          </div>
        </div>

        <div className="accordion" id="accordionExample">

          {travel.partecipants.map(partecipant => (
            partecipant.name.includes(search) || partecipant.surname.includes(search) ? (
              <div className="accordion-item" key={partecipant.id}>
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {partecipant.name} {partecipant.surname}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">

                    <p className="card-text">Email: {partecipant.email}</p>
                    <p className="card-text">Telefono: {partecipant.phone}</p>

                  </div>
                </div>
              </div>
            ) : (
              <p>Nessun risultato corrisponde alla ricerca</p>
            )



          ))}
        </div>
      </div>

    </>
  )
}