import { Link , useNavigate } from "react-router-dom";


import { useAuth } from "../custom/useAuth";


import { login, signUp } from "../api/authApi";


import { useState } from "react";

import  {notify} from "../utils/toast"
export default function Signup() {

  
    const [email , setEmail ] = useState("")
  
  const [password , setPassword] = useState("")
  
  const [ name , setName] = useState("")



  const {setUser} = useAuth()

  const navigation = useNavigate()

  const signUphandle = async (e) =>{
   
    e.preventDefault()
     
   const res = await signUp({
     
      name,
      email,
      password
    })
  
if (res && res.data) {
  const {user , token} = res.data

  setUser(user);

  if (token) {
    localStorage.setItem("token" , token)
  }
  notify.success("account created succesfully")
  navigation("/")
}
    }
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
         
          Create Account

        </h1>

        <p className="mt-2 text-neutral-500">
        
          Start scheduling content in minutes.
        
        </p>

        <form className="mt-8 space-y-4" onSubmit={signUphandle}>

          <input
         
         type="text"
         
            placeholder="Full Name"
         
            className="w-full h-12 px-4 border rounded-xl"
         
            value={name}
         
            onChange={(e) => setName(e.target.value)}
         
         />

          <input
         
         value={email}
         
               onChange={(e) => setEmail(e.target.value)}
         
            type="email"
         
            placeholder="Email"
         
            className="w-full h-12 px-4 border rounded-xl"
         
         />
          
          <input
            
            value={password}
            
               onChange={(e) => setPassword(e.target.value)}
            
            type="password"
            
            placeholder="Password"
        

            className="w-full h-12 px-4 border rounded-xl"
        
        />
        
          <button
        
        type="submit"
        
            className="w-full h-12 bg-black text-white rounded-xl font-medium"
        
        >
        
            Create Account
        
          </button>
        
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          
          <Link
            to="/login"
            className="font-semibold text-black hover:underline">
        
            Sign In
        
          </Link>
        
        </p>

      </div>
    </div>
  );
}