export default function AddPartecipantForm({ handleSubmitPartecipant }) {
  return (
    <>
      <form
        className="row g-3 needs-validation"
        aria-label="Aggiungi un nuovo Partecipante nei seguenti campi"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.checkValidity()) {
            handleSubmitPartecipant(e);
          } else {
            e.target.classList.add("was-validated");
          }
        }}
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            aria-label="Inserisci il nome del partecipante"
            name="name"
            placeholder="Inserisci il nome"
            required
          />
          <div className="invalid-feedback">Il nome è obbligatorio.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="surname" className="form-label">Cognome</label>
          <input
            type="text"
            className="form-control"
            aria-label="Inserisci il cognome del partecipante"
            name="surname"
            placeholder="Inserisci il cognome"
            required
          />
          <div className="invalid-feedback">Il cognome è obbligatorio.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            aria-label="Inserisci la e-mail del partecipante"
            name="email"
            placeholder="Inserisci l'email"
            required
          />
          <div className="invalid-feedback">Inserisci un'email valida.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Telefono</label>
          <input
            type="tel"
            className="form-control"
            aria-label="Inserisci il numero di telefono del partecipante"
            name="phone"
            placeholder="Inserisci il numero di telefono"
            pattern="[0-9]{9,10}"
            required
          />
          <div className="invalid-feedback">Inserisci un numero di telefono valido (9 o 10 cifre).</div>
        </div>

        <div className="col-12">
          <label htmlFor="fiscal_code" className="form-label">Codice fiscale</label>
          <input
            type="text"
            className="form-control"
            aria-label="Inserisci il codice fiscale del partecipante"
            name="fiscal_code"
            placeholder="Inserisci il tuo codice fiscale"
            pattern="[A-Z0-9]{16}"
            required
          />
          <div className="invalid-feedback">Inserisci un codice fiscale valido (16 caratteri).</div>
        </div>

        <div className="col-12">
          <button
            className="btn d-flex align-items-center justify-content-center custom-primary-btn"
            aria-label="Aggiungi il partecipante all'elenco premendo questo tasto"
            type="submit"
            style={{ width: "100%" }}
          >

            <img
              src="/imgs/logoipsum-custom-logo(1)-blue.svg"
              alt="logo"
              aria-label="Pubblica un nuovo viaggio premendo questo tasto"
              style={{ height: "30px", marginRight: "8px" }}
            />
            <span>Aggiungi partecipante</span>
          </button>
        </div>
      </form>
    </>
  );
}