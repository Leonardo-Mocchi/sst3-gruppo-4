export default function Popup({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
      <div className="popup-overlay">
          <div className="popup-content">
              <button className="popup-close" onClick={onClose}>
                  &times;
              </button>
              {children}
          </div>
      </div>
  );
}