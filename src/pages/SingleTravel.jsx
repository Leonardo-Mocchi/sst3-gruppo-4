import { useParams } from "react-router-dom";
import travels from "../data/db_travels";

export default function SingleTravel() {
  const { id } = useParams();
  console.log("ID from params:", id);

  // Usa .find() per ottenere il viaggio corrispondente
  const travel = travels.find((travel) => travel.id === Number(id));


  return (
    <>
      <div className="square_image position-relative">
        <img src="https://placehold.co/600x400.png" alt={travel.destination} className="img-fluid d-flex position-relative" />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-dark">
          <h1 className="position-absolute">ssvsdv</h1>
        </div>
      </div>

    </>
  );
}