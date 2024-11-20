// src/components/CashDeposit.js
import React from 'react';

const CashDeposit = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Deposit Cash</h5>
        <form>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" className="form-control" id="amount" placeholder="Enter amount" />
          </div>
          <div className="form-group">
            <label htmlFor="account">Select Account</label>
            <select className="form-control" id="account">
              <option>Account 1</option>
              <option>Account 2</option>
              <option>Account 3</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Deposit</button>
        </form>
      </div>
    </div>
  );
};

export default CashDeposit;