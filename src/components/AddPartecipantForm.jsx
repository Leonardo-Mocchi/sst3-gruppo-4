export default function AddPartecipantForm({ handleSubmitPartecipant }) {
  return (
    <>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmitPartecipant} 
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="name" 
            placeholder="Inserisci il nome"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="surname" className="form-label">Cognome</label>
          <input
            type="text"
            className="form-control"
            name="surname" 
            placeholder="Inserisci il cognome"
            required
          />
        </div>

        <div className="col-6 col-md-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email" 
            placeholder="Inserisci l'email"
            required
          />
        </div>

        <div className="col-6 col-md-3">
          <label htmlFor="phone" className="form-label">Telefono</label>
          <input
            type="number"
            className="form-control"
            name="phone" 
            placeholder="Inserisci il numero di telefono"
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="note" className="form-label">Note</label>
          <textarea
            className="form-control"
            name="note" 
            placeholder="Annotazioni personali"
            rows="2"
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary d-flex align-items-center" type="submit">
            <span>Aggiungi partecipante</span>
          </button>
        </div>
      </form>
    </>
  );
}