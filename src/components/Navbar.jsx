import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa";
import toast from 'react-hot-toast';


const Navbar = () => {

  // console.log(useLocation()); // {pathname: '/', search: '', hash: '', state: null, key: 'e34fckjk'}

  //to get the current path
  let {pathname} = useLocation()

  //to navigate/redirect to our required page
  let navigate = useNavigate()

  let token = sessionStorage.getItem("accessToken")
  console.log(token);
  
  const handleLogout = () => {
    if(confirm("Are you Sure ??")){
      sessionStorage.removeItem("accessToken")
      navigate("/login")
      toast.success("Logged out successfull")
    }
  }
  

  return (

    <header className="h-20 sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md px-4 md:px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="font-bold text-2xl text-blue-700 tracking-wide">
        <Link to="/">Crud-App</Link>
      </div>

        {/* Agar login ya singup wala page h mtlb path agar /login ya /singup h to navbar mat dikhao warna agar koi bhi dusra path h to navbar dikha do   */}
      {/* Hide nav on login/signup pages */}
      {pathname === "/login" || pathname === "/signup" ? null : (
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/contacts"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Contacts
          </Link>
        </nav>
      )}

      {/* Right Section */}
      <div className="font-medium flex items-center gap-4">
          {/* Agar token h yaani mtlb ki agar logged in tb jaake ye 3 button dikhao jo h create employee btn , all employee btn , logout btn lekin agar token nhi h matlab ki logged in nhi h tb hume sirf login aur signup ka button dikhega. Ternary operator mai ye do case rakhe h humlog. */}

        {token ? (
          <>
            {/* Create Employee */}
            <Link to="/create-emp">
              <button className="px-4 py-1.5 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-50 transition">
                Create Employee
              </button>
            </Link>

            {/* All Employees */}
            <Link to="/all-emp">
              <button className="px-4 py-1.5 rounded-lg text-green-600 border border-green-600 hover:bg-green-50 transition">
                All Employees
              </button>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full shadow transition"
            >
              <FaPowerOff size={16} />
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <Link to="/login">
              <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Login
              </button>
            </Link>

            {/* Signup */}
            <Link to="/signup">
              <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </header>

  )
}

export default Navbar


