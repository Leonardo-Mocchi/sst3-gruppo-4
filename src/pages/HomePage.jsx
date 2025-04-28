import { Link } from "react-router-dom";
import AddTravelForm from "../components/AddTravelForm";
import { useGlobalContext } from "../context/GlobalContext";
import CardStructure from "../components/CardStructure";

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
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-5 pt-3">
                    {travels.map((travel) => (
                        <div className="col" key={travel.id}>
                            <Link to={`/${travel.id}`} className="text-decoration-none text-dark">
                                <CardStructure travel={travel} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
        </main >
    );
}