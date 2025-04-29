import { Link } from "react-router-dom";
import AddTravelForm from "../components/AddTravelForm";
import { useGlobalContext } from "../context/GlobalContext";
import CardStructure from "../components/CardStructure";
import Popup from "../components/Popup";

export default function HomePage() {
    const { travels, setTravels, showForm, setShowForm, handleSubmit } = useGlobalContext();

    return (
        <main className="container mt-4">
            <h1>Bentornato!</h1>
            <div className="mt-2 mb-4">
                <div>
                    {/* add new travel form */}
                    <Popup isOpen={showForm} onClose={() => setShowForm(false)}>
                        <AddTravelForm handleSubmit={handleSubmit} />
                    </Popup>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-baseline mt-4">
                    <h3 className="mb-3">Viaggi in Corso</h3>

                    {/* create travel button to display the form */}
                    <button
                        className="btn d-flex align-items-center justify-content-center custom-primary-btn"
                        type="button"
                        onClick={() => setShowForm(!showForm)}
                    >
                        <i className="bi bi-plus-lg me-2"></i>
                        <span>Aggiungi Viaggio</span>
                    </button>
                </div>

                {/* cards */}
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-5 pt-3">

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