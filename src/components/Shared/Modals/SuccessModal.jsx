import React from "react";

export default function SuccessModal({ isOpen, onClose, text, title }) {
  console.log("SuccessModal open:", isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>{text}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={onClose}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
