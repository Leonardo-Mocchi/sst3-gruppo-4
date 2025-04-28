import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons';
import AddTravelForm from "../components/AddTravelForm";
import { useGlobalContext } from "../context/GlobalContext";

export default function HomePage() {
    const { travels, setTravels, showForm, setShowForm, handleSubmit } = useGlobalContext();

    return (
        <main className="container mt-4">

            <h1>Bentornato!</h1>

            <div className="mt-2 mb-4">

                <div className="d-flex justify-content-between align-items-baseline">
                    <h3 className="mb-3">Viaggi in Corso</h3>

                    {/* create travel button to display the form */}
                    <button
                        className={showForm ? ("btn btn-danger") : ("btn btn-primary")}
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
                <div>
                    {/* add new travel form */}
                    {showForm && (

                        <AddTravelForm handleSubmit={handleSubmit} />
                    )}
                </div>

                <hr />

                {/* cards */}
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-5">
                    {travels.map((travel) => (
                        <div className="col" key={travel.id}>
                            <Link to={`/${travel.id}`} className="text-decoration-none text-dark">
                                <div className="card" >
                                    <div id="badge_handler">
                                        <img className="card-img-top" src={travel.image} alt="Title" />
                                        {travel.partecipants?.length == 15 && (
                                            <span className="badge bg-success d-flex justify-content-start align-items-center" style={{ maxWidth: "130px" }}>
                                                <i className="fs-5 bi bi-check"></i>
                                                AL COMPLETO
                                            </span>
                                        )}
                                    </div>
                                    {/* card body */}
                                    <div className="card-body p-0 p-2">
                                        <h4 className="card-title text-nowrap overflow-hidden">{travel.destination}</h4>
                                        <div className="card-text">
                                            <div>
                                                <span className="fw-bold">
                                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                                </span>
                                                <span> {new Date(travel.start_trip).toLocaleDateString()}</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold">
                                                    <FontAwesomeIcon icon={faPlaneArrival} />
                                                </span>
                                                <span> {new Date(travel.end_trip).toLocaleDateString()}</span>

                                            </div>
                                            <div>
                                                <span className="fw-bold" style={{ paddingLeft: "2.5px", paddingRight: "3px" }}>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                                <span className=""> {travel.partecipants.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
        </main >
    );
}