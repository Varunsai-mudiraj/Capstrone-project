import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance
ReactDOM.render(
<React.StrictMode>
   <App />
    </React.StrictMode>,
      document.getElementById('root')
        );

        // Optional: Measure performance
        reportWebVitals();
