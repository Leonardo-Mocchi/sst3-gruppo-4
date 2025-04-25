import travels from "../data/db_travels"
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="container mt-4">
            <h1>Bentornato!</h1>

            <div className="mt-2 mb-4">
                <h3 className="mb-3">I nostri viaggi in corso</h3>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
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
                                    <div className="card-body p-0 p-2">

                                        <h4 className="card-title text-nowrap">{travel.destination}</h4>
                                        <p className="card-text">
                                            <span className="fw-bold">
                                                <i className="bi bi-airplane-fill departure" ></i>
                                            </span>
                                            {new Date(travel.start_trip).toLocaleDateString()}

                                            <br />

                                            <span className="fw-bold">
                                                <i id="departure_icon" className="bi bi-airplane-fill" ></i>
                                            </span>
                                            {new Date(travel.end_trip).toLocaleDateString()}

                                            <br />

                                            <span className="fw-bold">
                                                <i id="return_icon" class="bi bi-person-fill"></i>
                                            </span>
                                            {travel.partecipants.length}
                                        </p>
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