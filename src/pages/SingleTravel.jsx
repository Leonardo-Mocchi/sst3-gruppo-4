import { useParams } from "react-router-dom";
import travels from "../data/db_travels";

export default function SingleTravel() {
  const { id } = useParams();
  console.log(id);


  return (
    <main className="container-fluid mt-4 d-flex justify-content-center">

      {/* {travels.map(travel => (
        <div key={travel.id}>
          <div className="background">
            <h1>{travel.destination}</h1>
          </div>
        </div>
      ))} */}

      <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>



    </main>
  );
}