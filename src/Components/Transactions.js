// Transactions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            From: {transaction.fromAccountId} To: {transaction.toAccountId} Amount: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;