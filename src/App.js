// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Accounts from './Components/Accounts';
import Transactions from './Components/Transactions';
import CreditCard from './Components/CreditCard';
import CashDeposit from './Components/CashDeposit';
import Loan from './Components/Loan';
import CreditCardBills from './Components/CreditCardBills';
import User from './Components/User'; // Assuming you have a User component

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {/* <Route path="cash-deposit" element={<CashDeposit />} />
            <Route path="loan" element={<Loan />} />
            <Route path="credit-card-bills" element={<CreditCardBills />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/user" element={<User  />} /> {/* Add User route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;