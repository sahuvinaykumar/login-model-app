import React, { useState } from "react";
const ContactList = () => {
    const[number,setnumber]=useState()
    const[numbers,setnumbers]=useState(["+91 9876543210", "+91 9123456789", "+91 9000000000"])

    function addnumber(){
        // console.log(numbers);
        var isPresent=false
        numbers.map((value)=>{
            number==value&& (isPresent=true)
        })
        console.log(isPresent);
        isPresent?alert(`This number ${number} is already saved.`):setnumbers((predata)=>([...predata,number]))
        
        // console.log(numbers);
        
    }

    function deletenumber(ind){
        // console.log(numbers.splice(ind,1));
        var temp=numbers;
        temp.splice(ind,1)
        // console.log(temp);
        setnumbers([...temp])
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Contact Manager
                </h2>
                {/* Input Section */}
                <div className="flex items-center gap-3 mb-6">
                    <input
                        type="text"
                        onChange={(e)=>{setnumber(e.target.value)}}
                        placeholder="Enter phone number"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button onClick={addnumber} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow">
                        Add
                    </button>
                </div>
                {/* Contact List */}

                {
                    numbers.map((value,ind) => (
                        <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-gray-700 font-medium">{value}</span>
                        <button onClick={()=>{deletenumber(ind)}} className="text-red-500 hover:text-red-600 font-semibold">
                            Delete
                        </button>
                    </div>

                </div>
                    ))
                }

                
            </div>
        </div>
    );
};
export default ContactList;