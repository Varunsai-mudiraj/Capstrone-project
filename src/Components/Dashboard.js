// src/components/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="cash-deposit">Cash Deposit</Link> | 
        <Link to="loan">Loan</Link> | 
        <Link to="credit-card-bills">Credit Card Bills</Link>
      </nav>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default Dashboard;