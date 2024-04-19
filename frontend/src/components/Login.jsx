
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
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
      <div className="w-[500px] rounded-lg min-h-[400px] shadow-lg bg-slate-50 p-10">
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
         
          <label htmlFor="email" className='font-semibold'>Email</label>
          <input
            type="email"
            name="email"
             className='p-2 border-2 border-sky-500 rounded-lg'
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="password" className='font-semibold'>Password</label>
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
        <div>
          <p className='text-center m-5 font-semibold'>Already have account?<span onClick={()=>{navigate('/signup')}} className='font-semibold text-sky-500 hover:underline cursor-pointer'> SignUp</span> </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login


