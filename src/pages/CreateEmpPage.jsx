import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const CreateEmpPage = () => {

  const [empFormData , setEmpFormData] = useState({
    username:"",
    email:"",
    password:"",
    empId:"",
    designation:"",
    age:"",
    dateOfJoining:""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    let {name,value} = e.target
    setEmpFormData({...empFormData,[name]:value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(empFormData);
    
    let payload = {...empFormData}
    console.log(payload);
    
    //fetch wala aise krte lekin ye humlog nhi krenge
    // fetch("http://localhost:4000/employees" , {
    //   method:"POST",
    //   body:JSON.stringify(payload)
    // }).then(() => {} ).catch(() => {} )



      //humlog fetch na krke axios use krenge aur axios bhi ek promise deta h to uske liye async await use kr lenge aur try catch bhi krenge error wagera k liye yaha hum try catch bhool gye h waise.
      //without creating the baseurl wala chij mtlb ki direct exact api pe bhej rhe the
    //humlog axios se hamare form k data ko uss json-server db.json mai bhej rhe h api k dawara. try catch bhool gye h but actual jo niche k niche humlog banaye h usme hum use kiye h. waisa hi krna hota h
    // let res = await axios.post("http://localhost:4000/employees", payload)
    // console.log(res); //iske andar data key k andar main data h
    

    //actual axios :- our own axios
    
    //now we will make base url .env mai then usse axiosInstance bana k yaha use krenge aur bss endpoint yaha uss banaye huwe axiosInstance joki api word/variable h uske sath bhej denge as a endpoint aur jo data hume  bhejna h wo to mere payload nam k variable mai h hi usko bhej denge isme to kam ban jayega mtlb ki api se data post kr rhe h humlog.

    //yaha await k bad wo api word jo likha hua h usme hamara base url h jo .env se hum leke axios mai lerhe h file axiosInstance mai jaha hum variable api k andar uss base url ko rakh diye h .env se leke aur ab humlog ko emp ka data create krke db.json mai rakhna h to bss uss api ka end point joki /employees tha yaani bss endpoint ko bhej denge aise api.post("/employees",payload) simple h ye.
    try{
      let res = await api.post("/employees" , payload)
    console.log(res);  //res object jisme status , data key jiske andar actual data h wo sab wageraa wagera hota h.
    if(res.status === 201){
      toast.success("Employee Registered ✅")
      navigate("/all-emp")
    }
    }catch(err){
      toast.error("Registration Failed ❌")
    }
    
  }

  return (
    <div className=" bg-gray-50">
      <Navbar />

      <div className="max-w-xl mx-auto m-10 bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          New Employee Registration
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
              value={empFormData.username}
              name="username"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter email"
              required
              value={empFormData.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter password"
              required
              value={empFormData.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="EMP12345"
              required
              value={empFormData.empId}
              name="empId"
              onChange={handleChange}
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Manager / Developer / HR"
              required
              value={empFormData.designation}
              name="designation"
              onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter age"
              required
              value={empFormData.age}
              name="age"
              onChange={handleChange}
            />
          </div>

          {/* Date of Joining */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Joining
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-500"
              required
              value={empFormData.dateOfJoining}
              name="dateOfJoining"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmpPage;


