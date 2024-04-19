
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ' ',
    passwordConfirm: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/signup', data);
      console.log(res)
    
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen bg-sky-500 flex justify-center items-center">
      <div className="w-[500px] rounded-lg min-h-[500px] shadow-lg bg-[#fffffff4] p-10">
        <h1 className="text-center font-bold text-3xl">Sign Up</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="name" className='font-bold '>Name</label>
          <input
            type="text"
            name="name"
            className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.name}
            onChange={handleChange}
          />
          <label htmlFor="email"  className='font-bold'>Email</label>
          <input
            type="email"
            name="email"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="password"  className='font-bold'>Password</label>
          <input
            type="text"
            name="password"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.password}
            onChange={handleChange}
          />
          <label htmlFor="passwordConfirm"  className='font-bold'>Password Confirm</label>
          <input
            type="text"
            name="passwordConfirm"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.passwordConfirm}
            onChange={handleChange}
          />
          <button className="m-2 rounded-lg  text-white font-semibold px-6 py-3 bg-sky-500" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;


