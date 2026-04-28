import React, { useState } from 'react';
import { encryptPayload } from './apiUtils';

const Login = ({ onLoginSuccess }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      grant_type: "password",
      username: creds.username,
      password: creds.password
    };

    try {
      const response = await fetch('https://services-encr.iserveu.online/dev/nsdlab-internal/user-authorization/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Web',
          'Authorization': 'Basic ' + btoa('user:pass'),
        },
        body: JSON.stringify(encryptPayload(payload))
      });
      
      const data = await response.json();
      if (response.ok) onLoginSuccess(data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F8F9FA]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <img src="/nsdl-logo.png" alt="NSDL" className="h-10 mb-6 mx-auto" />
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-2 border mb-4 rounded"
          onChange={(e) => setCreds({...creds, username: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 border mb-6 rounded"
          onChange={(e) => setCreds({...creds, password: e.target.value})}
        />
        <button className="w-full bg-[#B33D44] text-white py-2 rounded font-bold">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;