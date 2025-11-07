import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function Signup() {

    const [userdata, setuserdata] = useState([
        {
            "username": "john_doe",
            "email": "john@gmail.com",
            "password": "123456",
            "mobile": "9876543210"
        },
        {
            "username": "emma_rose",
            "email": "emma@gmail.com",
            "password": "45623",
            "mobile": "9123456789"
        },
        {
            "username": "michael_smith",
            "email": "michael@yahoo.com",
            "password": "531456",
            "mobile": "9988776655"
        }
    ])
    const [formData, setformData] = useState({})
    const [edit, setedit] = useState(false)
    var check=false;

    //handling form input field
    function handleChange(e) {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
        // console.log(formData); 
    }

    //handling userdata
    function handleuserdata(e) {
        var editIndex;
        e.preventDefault()

        //check user already exist or not
        
            for (var i = 0; i < userdata.length; i++) {
            if (formData.email == userdata[i].email) {
                if(!edit){
                    check=true
                    alert(`User already exist with this ${formData.email}.`)
                }else{
                    editIndex=i;
                    // console.log(editIndex);
                    
                }
                
                
            }
        }
        

        if (check==false && edit==false) {
            setuserdata([...userdata, { ...formData }])
            // console.log(userdata); 
            check=false
        }else{
            const tempdata=[...userdata];
            tempdata[editIndex]=formData
            setuserdata([...tempdata])
            setedit(false)
        }

        setformData({})
    }

    //deleting userdata
    function deleteuser(index) {
        const newdata = userdata.filter((user, i) => (i !== index))
        setuserdata([...newdata])
        // console.log(index);

    }

    //editing userdata
    function edituser(index) {
        setedit(true)
        setformData(userdata[index])
        // console.log(index);

    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
            {/* Signup Card */}
            <div className="bg-white/90 shadow-2xl rounded-3xl p-8 w-full max-w-md">
                {
                    !edit ?
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Sign Up
                        </h2> :
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Edit User
                        </h2>
                }


                {/* Form Fields */}
                <form className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={formData.username || ""}
                        placeholder="Username"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {
                        !edit ?
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email || ""}
                                placeholder="Email"
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            /> : null
                    }

                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password || ""}
                        placeholder="Password"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="tel"
                        name="mobile"
                        onChange={handleChange}
                        value={formData.mobile || ""}
                        placeholder="Mobile"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <button
                        type="submit"
                        onClick={handleuserdata}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Table Section */}
            <div className="mt-10 w-full max-w-4xl bg-white/90 shadow-2xl rounded-3xl overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Username</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Password</th>
                            <th className="py-3 px-4 text-left">Mobile</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            userdata.map((user, index) => {
                                return (
                                    <>
                                        <tr className="border-b hover:bg-gray-100 transition-all">
                                            <td className="py-3 px-4">{user.username}</td>
                                            <td className="py-3 px-4">{user.email}</td>
                                            <td className="py-3 px-4">{user.password}</td>
                                            <td className="py-3 px-4">{user.mobile}</td>
                                            <td className="py-3 px-4 flex justify-center gap-4 text-lg">
                                                <button
                                                    onClick={() => { edituser(index) }}
                                                    className="text-blue-600 hover:text-blue-800">
                                                    <FiEdit2 />
                                                </button>
                                                <button
                                                    onClick={() => { deleteuser(index) }}
                                                    className="text-red-600 hover:text-red-800">
                                                    <AiOutlineDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Signup;
