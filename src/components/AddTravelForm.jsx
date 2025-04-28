export default function AddTravelForm({ handleSubmit }) {
  return (
    <>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit} 
      >
        <div className="col-md-6">
          <label htmlFor="destination" className="form-label">Destinazione</label>
          <input
            type="text"
            className="form-control"
            name="destination" 
            placeholder="Meta"
            required
          />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="start_trip" className="form-label">Data di Partenza</label>
          <input
            type="date"
            className="form-control"
            name="start_trip" 
            required
          />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="end_trip" className="form-label">Data di Ritorno</label>
          <input
            type="date"
            className="form-control"
            name="end_trip" 
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="note" className="form-label">Note</label>
          <textarea
            className="form-control"
            name="note" 
            placeholder="Qualche appunto?"
            rows="2"
          ></textarea>
        </div>
        <div className="col-md-3">
          <label htmlFor="partecipants" className="form-label">Partecipanti</label>
          <input
            type="text"
            className="form-control"
            name="partecipants" 
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary d-flex align-items-center" type="submit">
            <img
              src="/imgs/logoipsum-custom-logo(1).svg"
              alt="logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <span>Crea Viaggio</span>
          </button>
        </div>
      </form>
    </>
  );
}