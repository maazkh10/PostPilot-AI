import { Link } from "react-router-dom";
import { useAuth } from "../custom/useAuth";
import { login } from "../api/authApi";
import { useState } from "react";

import  {notify} from "../utils/toast"
import { useNavigate } from "react-router-dom";

export default function Login() {

  const {setUser} = useAuth()
  const navigate = useNavigate()

  const [email , setEmail] = useState("")
  const [password , setPasswordl] = useState("")
  

  const handleLogin =  async () =>{
    const res = await login({
   email , password
    });
    setUser(res.data.data.user)
    notify.success("login successful")
    navigate("/")
    console.log(res.data)
  }
  return (
    <div className="min-h-screen flex bg-neutral-50">
      
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-white border-r border-neutral-200 items-center justify-center px-20">
        <div className="max-w-md">
          
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl">
            GG
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-neutral-900">
            AI Social Media Post  Sheduler
          </h1>

          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            Plan, create and publish content across all your social platforms
            from one beautiful workspace.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span>✓</span>
              <p>AI-generated content ideas</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✓</span>
              <p>Multi-platform scheduling</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✓</span>
              <p>Content calendar & planner</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✓</span>
              <p>Analytics and engagement tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">

          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-neutral-900">
              Welcome back
            </h2>

            <p className="mt-2 text-neutral-500">
              Sign in to continue managing your content.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleLogin}>

              <div>
                <label className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 px-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPasswordl(e.target.value)}
                />
              </div>

              {/* <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-neutral-500 hover:text-black"
                >
                  Forgot Password?
                </button>
              </div> */}

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
              >
                Sign In
              </button>

              {/* <button
                type="button"
                className="w-full h-12 rounded-xl border border-neutral-300 hover:bg-neutral-50 transition"
              >
                Continue with Google
              </button>
               */}
            </form>

            <p className="mt-6 text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-black hover:underline"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}