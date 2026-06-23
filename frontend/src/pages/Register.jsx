import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import BASE_URL from '../config/api'


const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function Submit(e){
    e.preventDefault()
    setLoading(true);
    if (!email || !password|| !name) {
      alert("Please fill the form ")
      return
    }
    try{
      const response = await fetch(
        `${BASE_URL}/api/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            name: name.toLowerCase(),
            email: email.toLowerCase(),
            password
          })
        }
      )

      const data = await response.json()
      setLoading(false)
      if (data.message === "User Registeres Successful") {
        alert("Registered Successfully")
        navigate('/login')
      }
      else{
        alert(data.message)
      }

    }catch(error){
      console.log(error)
    }
    
  }

  return (
  <div className="min-h-screen bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center px-4 py-8">

    <form
      onSubmit={Submit}
      className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/40 transition-all duration-500 hover:shadow-blue-300"
    >

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Join your Notes App today
      </p>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="
            w-full
            p-3
            rounded-xl
            border
            border-gray-300
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-200
            hover:border-blue-400
          "
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
            w-full
            p-3
            rounded-xl
            border
            border-gray-300
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-200
            hover:border-blue-400
          "
        />

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              p-3
              pr-12
              rounded-xl
              border
              border-gray-300
              outline-none
              transition-all
              duration-300
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-200
              hover:border-blue-400
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-500
              hover:text-blue-600
              transition-all
              duration-300
              hover:scale-110
            "
          >
            {showPassword ? <MdVisibilityOff size={22} /> : <MdVisibility size={22} />}
          </button>

        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full
            py-3
            rounded-xl
            text-white
            font-semibold
            transition-all
            duration-300
            transform
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-blue-400"
            }
          `}
        >
          {loading ? "Please wait..." : "Create Account"}
        </button>

      </div>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?
        <span
          onClick={() => navigate('/login')}
          className="
            ml-2
            text-blue-600
            font-semibold
            cursor-pointer
            hover:text-blue-800
            hover:underline
            transition-all
            duration-300
          "
        >
          Login
        </span>
      </p>

    </form>

  </div>
  )
}

export default Register
