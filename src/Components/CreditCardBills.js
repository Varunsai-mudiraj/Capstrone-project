// src/components/CreditCardBills.js
import React from 'react';

const CreditCardBills = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pay Credit Card Bills</h5>
        <form>
          <div className="form-group">
            <label htmlFor="creditCard">Select Credit Card</label>
            <select className="form-control" id="creditCard">
              <option>Card 1</option>
              <option>Card 2</option>
              <option>Card 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="billAmount">Bill Amount</label>
            <input type="number" className="form-control" id="billAmount" placeholder="Enter bill amount" />
          </div>
          <button type="submit" className="btn btn-primary">Pay Bill</button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardBills;