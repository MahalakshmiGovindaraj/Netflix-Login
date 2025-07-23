import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  const [showMore, setShowMore] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter your username.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setError(""); // clear error if input is valid
    check();
  };
  function check() {
    var loginDetails = axios.post("http://localhost:5000/login", { "username": username, "password": password })
    loginDetails.then(function (data) {
      if (data.data === true) {
        navigate("/success")
      }
      else {
        setError("Login failed. Please check your credentials.");

      }
    })
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      <main className="relative flex-grow flex items-center justify-center px-4 py-10 text-white
        bg-black 
        md:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp')]
        md:bg-cover md:bg-center">

        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix"
          className="absolute top-6 left-10 w-28 sm:w-32 md:left-36" />

        <div className="p-10 sm:p-10 md:p-14 lg:p-16 rounded-xl bg-black/60 shadow-md backdrop-blur-sm 
          w-[90%] sm:w-[400px] md:w-[450px] mt-10">

          <h1 className='text-3xl font-bold mb-4'>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className='relative w-80 mb-2'>
              <input
                type='text'
                placeholder='Email or Phone Number'
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='bg-black p-4 rounded-md mb-4 w-80 text-base border border-white/40 
                  focus:ring-2 focus:ring-white/80 peer transition-all duration-200
                  placeholder-white focus:placeholder-transparent' />

              <label htmlFor="email"
                className="absolute left-5 top-4 text-white text-base
                  opacity-0 peer-focus:opacity-100 peer-placeholder-shown:opacity-0 
                  peer-focus:top-1 peer-placeholder-shown:top-4
                  peer-focus:text-xs peer-placeholder-shown:text-base">
                Email or Phone Number
              </label>
            </div>

            <div className='relative w-80 mb-2'>
              <input
                type='password'
                placeholder='Password'
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-black p-4 rounded-md mb-4 w-80 text-base border border-white/40 
                  focus:ring-2 focus:ring-white/80 peer transition-all duration-200
                  placeholder-white focus:placeholder-transparent' />

              <label htmlFor="pass"
                className="absolute left-5 top-4 text-white text-base 
                  opacity-0 peer-focus:opacity-100 peer-placeholder-shown:opacity-0 
                  peer-focus:top-1 peer-placeholder-shown:top-4
                  peer-focus:text-xs peer-placeholder-shown:text-base">
                Password
              </label>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <button type="submit" className='bg-red-600 text-white p-2 rounded-md w-80 mb-3'>
              Sign In
            </button>
          </form>

          <label className='inline-block text-center w-80'>OR</label> <br />
          <button className='bg-transparent text-white border border-white/40 p-2 w-80 rounded-md mt-3'>
            Use a sign-in code
          </button> <br />

          <a href='' className='inline-block text-center w-80 mt-3 underline'>Forgot Password?</a> <br />

          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 mr-2 accent-black checked:accent-white mt-5 mb-4 cursor-pointer"
          />
          <label htmlFor="remember" className="text-white text-base">
            Remember me
          </label>

          <div className='flex'>
            <p className='text-white/60'>New to Netflix? </p>
            <a href="" className='cursor-pointer font-bold ml-1'>Sign up now.</a>
          </div>

          <div className="text-sm text-gray-400 mt-4 max-w-md mb-10">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <br />
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="text-blue-500 underline mt-2"
              >
                Learn More
              </button>
            )}

            {showMore && (
              <div className="mt-2 text-gray-400">
                The information collected by Google reCAPTCHA is subject to the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Google Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Terms of Service
                </a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general
                security purposes (it is not used for personalised advertising by Google).
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
