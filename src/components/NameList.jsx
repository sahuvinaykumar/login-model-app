import React from 'react'
import { useState } from 'react';

function NameList() {
    const[list,setlist]=useState(["Ram","Shyam","Govind","Krishna","Kavi"])
    const[name,setname]=useState();
    function handlelist(){
        setlist((predata)=>([...predata,name]))
    }
  return (
    <div className=' py-5 flex flex-col justify-center border m-30 border-3 border-blue-500 gap-10 px-40'>
      <input onChange={(e)=>{setname(e.target.value)}} className='border mt-15 px-10 py-3 rounded-2xl w-3/4 bg-white ' placeholder='Add name here...' type="text" />
      <button onClick={handlelist} className='border rounded-4xl px-5 py-2 w-30 bg-green-200 text-green-500 fot-bold text-xl'>Add</button>

      <ul className='text-2xl flex flex-col gap-1 font-semibold text-gray-800 '>
        {
            list.map((value)=>{return(<li>{value}</li>)})
        }
      </ul>
    </div>
  )
}

export default NameList
