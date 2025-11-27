import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../axios/axiosInstance';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';


const EditEmpPage = () => {

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


    let {id} = useParams()  // returns an object of key(:id) value(emp.id) pairs of the dynamic params from the current URL that were matched by the routes.
    console.log(id); //url mai jobhi dynamic param/value h wo useParam k return kiye huwe object se destructure krke nikal liye for editing the particular employee data
    
    async function getEditEmployee(){
        try{
            let res = await api.get(`/employees/${id}`)
            console.log(res.data);
            setEmpFormData(res.data)
        }catch(err){
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        getEditEmployee()
    },[])

    async function handleUpdate(e){
        e.preventDefault()
        try{
            // console.log(empFormData);
            let payload = {...empFormData}
            let res = await api.put(`/employees/${id}`,payload)
            console.log(res);
            if(res.status===201){
                toast.success("Updated Successfully ✅")
                navigate("/all-emp")
            }
            // toast.success("Updated Successfully ✅")
            // navigate("/all-emp")
        }catch(err){
            console.log(err);
            toast.error("Unable to Update ❌")
        }
    }


  return (
    <div>
        <Navbar/>

        <div className="max-w-xl mx-auto m-10 bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Update Employee Registration
        </h2>

        <form className="space-y-5" onSubmit={handleUpdate}>

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
            Update Employee
          </button>
        </form>
      </div>

    </div>
  )
}

export default EditEmpPage