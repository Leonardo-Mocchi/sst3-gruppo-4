import travels from "../data/db_travels"
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="container mt-4">
            <h1>Bentornato!</h1>

            <div className="mt-2 mb-4">
                <h3 className="mb-3">I nostri viaggi in corso</h3>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {travels.map((travel) => (
                        <div className="col" key={travel.id}>
                            <Link to={`/${travel.id}`} className="text-decoration-none text-dark">
                                <div className="card" >
                                    <img className="card-img-top" src={travel.image} alt="Title" />
                                    <div className="card-body">
                                        <h4 className="card-title">{travel.destination}</h4>
                                        <p className="card-text">
                                            <span className="fw-bold">Departure:</span> {new Date(travel.start_trip).toLocaleDateString()}
                                            <br />
                                            <span className="fw-bold">Participants:</span> {travel.partecipants.length}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}