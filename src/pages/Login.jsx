import { useState } from "react";
import { login } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate= useNavigate()
    
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
  
  
    const handleSubmit= async (e)=> {
      e.preventDefault();
      const user= await login(email,password)
      if (user) {
        
      navigate('/', {
        replace:true
      })
      }
      }

      
  return (
    
    <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>
   
   <div>
  <label className="block text-sm font-medium leading-6 text-gray-900">E-posta</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
     value={email} onChange={e=> setEmail(e.target.value)}
     type="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com"/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <label  className="sr-only">Currency</label>
    
    </div>
  </div>
</div>

<div>
  <label className="block text-sm font-medium leading-6 text-gray-900">Parola</label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
    value={password} onChange={e=> setPassword(e.target.value)}
     type="password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="*****"/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <label  className="sr-only"></label>
    
    </div>
  </div>
</div>
    
   
<div>
    <button className="disabled:opacity-30 cursor-pointer text-white inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-sm bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "  disabled={!email || !password} type='submit'>Giriş Yap</button>
    </div>

  </form>
  )
}

export default Login;
