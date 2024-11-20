// src/components/Loan.js
import React from 'react';

const Loan = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Apply for a Loan</h5>
        <form>
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input type="number" className="form-control" id="loanAmount" placeholder="Enter loan amount" />
          </div>
          <div className="form-group">
            <label htmlFor="loanTerm">Loan Term (in years)</label>
            <input type="number" className="form-control" id="loanTerm" placeholder="Enter loan term" />
          </div>
          <button type="submit" className="btn btn-primary">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default Loan;