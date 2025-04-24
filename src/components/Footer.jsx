export default function Footer() {

    return (
        <footer>
            <div className="footer-up">
                <div className="container p-3">
                    <div className="row justify-content-center text-center g-1 my-2">
                        <div className="col-lg-4 col-md-4 mb-3">
                            <h6 className="text-uppercase">Resources</h6>
                            <ul className="list-unstyled mb-1">
                                <li>
                                    <a href="#" className="text-dark">FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Support</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-3 mb-md-0 ">
                            <h6 className="text-uppercase">Links</h6>
                            <ul className="list-unstyled mb-1">
                                <li>
                                    <a href="#" className="text-dark">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-2">
                            <h6 className="text-uppercase">About Us</h6>
                            <ul className="list-unstyled mb-4">
                                <li>
                                    <a href="#" className="text-dark">Our Mission</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Our Team</a>
                                </li>
                            </ul>
                            <h6 className="text-uppercase">Follow Us</h6>

                            <a href="#" className="text-dark me-1">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-dark me-1">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-dark me-1">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-dark me-1">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-2 footer-low py-3">
                © 2025 Copyright
            </div>
        </footer>
    );
}