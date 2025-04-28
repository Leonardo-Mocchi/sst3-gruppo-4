import { useState } from "react";

export default function AddTravelForm({ handleSubmit }) {
  const [error, setError] = useState("");

  const validateDates = (startDateInput, endDateInput) => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (endDate <= startDate) {
      setError("La data di ritorno deve essere successiva alla data di partenza.");
      endDateInput.setCustomValidity("La data di ritorno deve essere successiva alla data di partenza."); // Mark as invalid
      return false;
    }

    setError("");
    endDateInput.setCustomValidity(""); // Clear the invalid state
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const startDateInput = e.target.elements.start_trip; // Access the start date input
    const endDateInput = e.target.elements.end_trip; // Access the end date input

    if (validateDates(startDateInput, endDateInput)) {
      handleSubmit(e); // Call the parent submit handler if validation passes
    } else {
      e.target.classList.add("was-validated"); // Add Bootstrap validation styles
    }
  };

  return (
    <>
      <form
        className="row g-3 needs-validation"
        aria-label="Crea un nuovo viaggio nei seguenti campi"
        noValidate
        onSubmit={handleFormSubmit}
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

        <div className="col-12 col-sm-6 col-md-3">
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

        {error && (
          <div className="col-12">
            <p className="text-danger">{error}</p>
          </div>
        )}

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
          <button
            className="btn d-flex align-items-center justify-content-center custom-primary-btn"
            type="submit"
            style={{ width: "100%" }}
          >
            <img
              src="/imgs/logoipsum-custom-logo(1)-blue.svg"
              alt="logo"
              aria-label="Pubblica un nuovo viaggio premendo questo tasto"
              style={{ height: "30px", marginRight: "8px" }}
            />
            <span>Crea Viaggio</span>
          </button>
        </div>
      </form>
    </>
  );
}