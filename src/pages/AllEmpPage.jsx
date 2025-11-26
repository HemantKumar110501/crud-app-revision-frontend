import React, { useEffect, useState } from 'react'
import { api } from '../axios/axiosInstance'
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';



const AllEmpPage = () => {

  const [employees,setEmployees] = useState([])

  //for spinner
  const [isLoading,setIsLoading]=useState(false)

  async function getAllEmployees(){
    try{
      setIsLoading(true)

      setTimeout(async () => {
        let res = await api.get("/employees")
      console.log(res.data); //res.data k andar actual data h
      setEmployees(res.data) 
      setIsLoading(false)
      },2000)

    }catch(error){
      toast.error("Something Went wrong")
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllEmployees()
  },[])

  async function handleDeleteEmp(id){
    try{
      console.log(id);
      if(confirm("Are you sure ?")){
        let res = await api.delete(`/employees/${id}`)
        console.log(res);
        getAllEmployees()  //taaki refersh ho aur deleted wala dikhe ui ai bina page ko refresh kiye huwe
      // navigate("/all-emp")  //ye kam nhi kar rha isiliye ya to forefully reload ya getAllEmployees() ko wapas call krdenge
      // window.location.reload()  //for forecefully reload
      }

    }catch(err){
      console.log(err);
      toast.error("Deletion Failed")
    }
  }

  return (
    <div>
      <Navbar />

      <section className="px-6 py-8">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">All Employees</h1>
            <p className="text-gray-600">
              Total Employees : {employees.length}
            </p>
          </div>
        </header>

        {isLoading && <p className="text-center text-lg">Loading...</p>}   {/**short circuit */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="border border-gray-300 shadow-md rounded-xl p-5 bg-white transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {emp.username}
              </h2>

              <div className="space-y-1 text-gray-700">

                <p> {/***iss wale id se hi dynamic routing krke partcular emp ka particular edit page layenge */}
                  <b>Unique id by JSON:</b> {emp.id}
                </p>
                <p>
                  <b>Emp ID:</b> {emp.empId}
                </p>
                <p>
                  <b>Email:</b> {emp.email}
                </p>
                <p>
                  <b>Designation:</b> {emp.designation}
                </p>
                <p>
                  <b>Age:</b> {emp.age}
                </p>
                <p>
                  <b>Joining:</b> {emp.dateOfJoining}
                </p>
              </div>

              <div className="flex gap-3 mt-5">

                <Link to={`/edit-emp/${emp.id}`} className="w-1/2">
                  <button className="w-full py-2 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold">
                    Edit
                  </button>
                </Link>

                
                <button onClick={() => handleDeleteEmp(emp.id)} className="w-1/2 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AllEmpPage



