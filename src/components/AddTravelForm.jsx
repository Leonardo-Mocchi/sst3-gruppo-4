export default function AddTravelForm() {

  return (

    <>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">Destinazione</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Meta"
            required
          />
          <div className="valid-feedback">
            <i className="fs-5 bi bi-check"></i>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="validationCustom02" className="form-label">Data di Partenza</label>
          <input
            type="date"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">
            <i className="fs-5 bi bi-check"></i>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="validationCustomUsername" className="form-label">Data di Ritorno</label>
          <div className="input-group">
            {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
            <input
              type="date"
              className="form-control"
              id="validationCustomata di Ritorno"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustom03" className="form-label">Note</label>
          <textarea
            className="form-control"
            id="validationCustom03"
            placeholder="Qualche appunto?"
            rows="2" // Specify the number of rows
          ></textarea>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Partecipanti</label>
          <input type="text" className="form-control" id="validationCustom05" required />
          <div className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        {/* <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div> */}
        <div className="col-12">
          <button className="btn btn-primary d-flex align-items-center " type="submit"> <img src="/imgs/logoipsum-custom-logo(1).svg" alt="" style={{ height: "30px", marginRight: "10px" }} /> <span>Crea Viaggio</span></button>
        </div>
      </form>
    </>
  )
}