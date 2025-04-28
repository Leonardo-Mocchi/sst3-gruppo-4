import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons';

export default function CardStructure({travel}) {

  return (
    <>
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
    </>
  )
}