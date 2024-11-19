import React from 'react';

const MenuModal = ({ show, close, burger }) => {
  if (!show) return null; // If show is false, do not render the modal

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Burger : {burger.title}</h5>
            <button type="button" className="btn-close" onClick={close} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><strong>Description:</strong> {burger.paragraph}</p>
            <p><strong>Price:</strong> {burger.price}</p>
       
            <img src={burger.image} className="col-md-3 ms-1" alt={burger.title} />
          </div>
          <div className="modal-footer">
            <button type="button" onClick={close} className="btn btn-danger">Close</button>
            <button type="button" onClick={close} className="btn btn-danger">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
