import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await axios.get('/api/accounts');
      setAccounts(response.data);
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Your Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.accountHolder}: ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;