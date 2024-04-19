import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Login() {
     const [data, setData] = useState({
    
    email: '',
    password: ' ',
  
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
       <div className="h-screen bg-sky-500 flex justify-center items-center">
      <div className="w-[500px] min-h-[400px] shadow-lg bg-slate-50 p-10">
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
         
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.password}
            onChange={handleChange}
          />
         
          <button className="m-2 rounded-lg  text-white font-semibold px-6 py-3 bg-sky-500" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
