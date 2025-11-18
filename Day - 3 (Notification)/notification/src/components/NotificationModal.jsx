import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function NotificationModal({ onClose }) {

  useEffect(() => {
    console.log("Modal Opened");

    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="modal-box">
        <h3>🔔 Notification</h3>
        <p>This notification will close in 5 seconds.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
