import Travels from "../data/db_travels"

export default function HomePage() {
    return (
        <main className="container mt-4">
            <h1>Bentornato!</h1>

            <div className="my-4">
                <h3>I nostri viaggi in corso</h3>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {Travels.map((travel) => (
                        <div className="col" key={travel.id}>
                            <div className="card" >
                                <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                                <div className="card-body">
                                    <h4 className="card-title">{travel.destination}</h4>
                                    <p className="card-text">Text</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}