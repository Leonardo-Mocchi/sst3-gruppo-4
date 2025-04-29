import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <>
            <main className='d-flex flex-column align-items-center justify-content-start pt-3'>

            <h2 className="text-center my-5">404 Pagina non trovata</h2>

                {/* Home button */}
                <div className="d-flex justify-content-center my-5">
                    <Link to={"/"} className='text-decoration-none text-dark'>
                        <button className='btn btn-outline-dark mt-4'> <i className="bi bi-arrow-left"> </i> Torna alla Home </button>
                    </Link>
                </div>

            </main>
        </>
    )
}