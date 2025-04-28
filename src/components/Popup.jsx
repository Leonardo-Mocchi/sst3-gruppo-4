import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Popup({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" aria-label="Close popup" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {children}
            </div>
        </div>
    );
}