import React from "react";

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  console.log("ConfirmationModal open:", isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Your Order</h5>
              <button type="button" className="close" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to place this order?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={onConfirm}>
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
