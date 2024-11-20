import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to authenticate user
    const response = await axios.post('/api/users/login', {
      username,
      password,
    });
    // Store JWT token in local storage
    localStorage.setItem('token', response.data.token);
    // Redirect to dashboard
    history.push('/');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Login;