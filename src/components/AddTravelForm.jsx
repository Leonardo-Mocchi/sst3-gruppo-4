export default function AddTravelForm({ handleSubmit }) {
  return (
    <>
      <form
        className="row g-3 needs-validation"
        aria-label="Crea un nuovo viaggio nei seguenti campi"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.checkValidity()) {
            handleSubmit(e);
          } else {
            e.target.classList.add("was-validated");
          }
        }}
      >
        <div className="col-md-6">
          <label htmlFor="destination" className="form-label">Destinazione</label>
          <input
            type="text"
            className="form-control"
            aria-label="Inserisci la Destinazione"
            name="destination"
            placeholder="Meta"
            required
          />
          <div className="invalid-feedback">La destinazione è obbligatoria.</div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <label htmlFor="start_trip" className="form-label">Data di Partenza</label>
          <input
            type="date"
            className="form-control"
            aria-label="Inserisci la data di inizio del viaggio"
            name="start_trip"
            required
          />
          <div className="invalid-feedback">La data di partenza è obbligatoria.</div>
        </div>

        <div className="col-12 col-sm-6  col-md-3">
          <label htmlFor="end_trip" className="form-label">Data di Ritorno</label>
          <input
            type="date"
            className="form-control"
            aria-label="Inserisci la data di fine del viaggio"
            name="end_trip"
            required
          />
          <div className="invalid-feedback">La data di ritorno è obbligatoria.</div>
        </div>

        <div className="col-12">
          <label htmlFor="note" className="form-label">Note</label>
          <textarea
            className="form-control"
            name="note"
            aria-label="Inserisci eventuali note"

            placeholder="Qualche appunto?"
            rows="2"
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary d-flex justify-content-center align-items-center" type="submit" style={{ width: "100%" }}>
            <img
              src="/imgs/logoipsum-custom-logo(1).svg"
              alt="logo"
              aria-label="Pubblica un nuovo viaggio premendo questo tasto"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <span>Crea Viaggio</span>
          </button>
        </div>
      </form>
    </>
  );
}