import {login} from "../store/auth"
import { useState } from "react"
import { auth, update,resetPassword } from "../firebase"
import { useDispatch, useSelector } from "react-redux"

const UpdateProfile = () => {

  const dispatch =useDispatch()
const {user} =useSelector(state =>state.auth)
const [displayName, setDisplayName] = useState(user.displayName || '')
const [avatar, setAvatar] = useState(user.photoURL || '')
const [password, setPassword] = useState('')



const handleSubmit = async e => {
    e.preventDefault()
    await update({
        displayName,
        photoURL: avatar
    })

   


    dispatch(login({
      displayName:auth.currentUser.displayName,
      email:auth.currentUser.email,
      emailVerified:auth.currentUser.emailVerified,
      photoURL:auth.currentUser.photoURL,
      uid:auth.currentUser.uid
    }))
}
const handleResetSubmit =async e=> {
  e.preventDefault()
  const result=await resetPassword(password)
  if(result) {
    setPassword('')
  }
  
  }

  return (
    <div className="grid gap-y-10">

     <form onSubmit={handleSubmit}
     className="grid gap-y-4 ">
        <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
<div>
  <label className="block text-sm font-medium leading-6 text-gray-900">Ad Soyad </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
     value={displayName} onChange={e=> setDisplayName(e.target.value)}
     type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="john doe"/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      
    
    </div>
  </div>
  </div>
  <div>
  <label className="block text-sm font-medium leading-6 text-gray-900">Fotograf </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
     value={avatar} onChange={e=> setAvatar(e.target.value)}
     type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="images link"/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      
    
    </div>
  </div>
  </div>

  <div>
    <button className="disabled:opacity-30 cursor-pointer text-white inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-sm bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "   type='submit'>Güncelle</button>
    </div>



    </form>

    <form onSubmit={handleResetSubmit}
     className="grid gap-y-4 ">
        <h1 className="text-xl font-bold mb-4">Parolayı Güncelle</h1>
<div>
  <label className="block text-sm font-medium leading-6 text-gray-900">Parola </label>
  <div className="relative mt-2 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm"></span>
    </div>
    <input
     value={password} onChange={e=> setPassword(e.target.value)}
     type="password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="****"/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      
    
    </div>
  </div>
  </div>
 

  <div>
    <button
    disabled= {!password}
    className="disabled:opacity-30 cursor-pointer text-white inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-sm bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "   type='submit'>Şifreyi Güncelle</button>
    </div>



    </form>
    </div>
   
  )
}

export default UpdateProfile