import { useState } from "react";
import { Link } from "react-router-dom";
import travelsData from "../data/db_travels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    // Add a new travel object
    const [travels, setTravels] = useState(travelsData);

    // !!!!!!!!!!!! test function !!!!!!!!!!!!
    const pushIt = () => {
        const newTravel = {
            id: travels.length + 1,
            destination: "Venice",
            start_trip: "2025-01-10",
            end_trip: "2025-01-15",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem similique amet reprehenderit dolor! Nesciunt sit omnis tempore alias ex aperiam ipsam blanditiis ea repudiandae saepe culpa quasi vitae, excepturi voluptas?",
            image: "/imgs/venice.jpg",
            partecipants: [
                { id: 181, name: "John", surname: "Doe", fiscal_code: "DOEJHN181A181A181A", email: "john.doe@example.com", phone: "1234567890" },
                { id: 182, name: "Jane", surname: "Smith", fiscal_code: "SMTJNE182B182B182B", email: "jane.smith@example.com", phone: "2345678901" },
            ],
        };

        // Update the state with the new travel
        setTravels((prevTravels) => [...prevTravels, newTravel]);
    };

    return (
        <main className="container mt-4">

            <button type="button" className="btn btn-info" onClick={pushIt}>Push new travel test</button>

            <h1>Bentornato!</h1>

            <div className="mt-2 mb-4">

                <div className="d-flex justify-content-between align-items-baseline">
                    <h3 className="mb-3">I nostri viaggi in corso</h3>

                    {/* create travel button to display the form */}
                    <button
                        className="btn btn-primary"
                        style={{ padding: "0.25rem 1rem" }}
                        type="button">
                        <i className="bi bi-plus-lg" ></i> Aggiungi Viaggio
                    </button>
                </div>
                <div>
                    {/* add new travel form */}
                    <form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Destinazione</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Meta"
                                required
                            />
                            <div className="valid-feedback">
                                <i className="fs-5 bi bi-check"></i>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <label htmlFor="validationCustom02" className="form-label">Data di Partenza</label>
                            <input
                                type="date"
                                className="form-control"
                                id="validationCustom02"
                                required
                            />
                            <div className="valid-feedback">
                                <i className="fs-5 bi bi-check"></i>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <label htmlFor="validationCustomUsername" className="form-label">Data di Ritorno</label>
                            <div className="input-group">
                                {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                                <input
                                    type="date"
                                    className="form-control"
                                    id="validationCustomata di Ritorno"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="validationCustom03" className="form-label">Note</label>
                            <textarea
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Qualche appunto?"
                                rows="w" // Specify the number of rows
                            ></textarea>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom05" className="form-label">Partecipanti</label>
                            <input type="text" className="form-control" id="validationCustom05" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        {/* <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Crea Viaggio</button>
                        </div>
                    </form>
                </div>

                <hr />

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {/* card */}
                    {travels.map((travel) => (
                        <div className="col" key={travel.id}>
                            <Link to={`/${travel.id}`} className="text-decoration-none text-dark">
                                <div className="card" >
                                    <div id="badge_handler">
                                        <img className="card-img-top" src={travel.image} alt="Title" />
                                        {travel.partecipants.length == 15 && (
                                            <span className="badge bg-success d-flex justify-content-start align-items-center" style={{ maxWidth: "130px" }}>
                                                <i className="fs-5 bi bi-check"></i>
                                                AL COMPLETO
                                            </span>
                                        )}
                                    </div>
                                    {/* card body */}
                                    <div className="card-body p-0 p-2">
                                        <h4 className="card-title text-nowrap">{travel.destination}</h4>
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