import { NavLink } from "react-router-dom"

export default function Header() {

    const SiteMap = [
        {
            id: 1,
            path: "/",
            text: 'Torna alla pagina principale'
        }
    ]

    return (
        <header className="bg-dark text-center py-2">
            {/* <div className="d-flex justify-content-between container"> */}
            <a className="navbar-brand" href="/">
                <img src="/imgs/logoipsum-custom-logo.svg" alt="logo" height={75} />
            </a>

            {/* {SiteMap.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                        className={({ isActive }) =>
                            `nav-link m-1 btn text-light border ${isActive ? "d-none" : "btn-outline-light"}`
                        }
                    >
                        {item.text}
                    </NavLink>
                ))}
            </div> */}
        </header>
    )
}