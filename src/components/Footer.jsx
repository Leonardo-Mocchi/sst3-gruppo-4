export default function Footer() {

    return (
        <footer className="text-light bg-dark">
            <div className="text-center p-2 py-3">
                © {new Date().getFullYear()} BooRoad. All rights reserved.
            </div>
        </footer>
    );
}