import React from 'react'
import { GrCurrency } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";


function Rowstyle(props) {
    // console.log(props.data);
    const {image,title,country,contact,email,status,activation,time,balance}=props.data
   
  return (
    <>
    
      <tr className='h-30 bg-white'>
            <td className='rounded-l-3xl w-30 p-5'><img className='h-15 w-15 rounded-xl object-cover' src={image}/></td>
            <td><p className='font-bold text-2xl'>{title}</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-15'>{country}</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-15'>{contact}</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-[5ch]'>{email.split("@")[0]}<br/>@{email.split("@")[1]}</p></td>
            <td><button className={`rounded-2xl px-3 py-1 font-semibold 
      ${status.toLowerCase() === "activated" 
        ? "bg-green-100 text-green-500" 
        : "bg-red-100 text-red-500"}`}>{status}</button></td>
            <td><p className='text-sm font-medium text-gray-500 w-20'><span className='text-black'>{activation} </span>{time}</p></td>
            <td className='bg-gray-100 p-5'><div className='flex items-center justify-center gap-5'><GrCurrency className='text-2xl' /> <p className='text-sm text-gray-500'><span className='font-bold'>{balance} </span>GBP</p> </div></td>
            <td className='px-6 w-40 rounded-r-3xl '><div className='flex justify-between items-center'><div className='border-r-2 h-25 border-gray-300 w-1/2 flex justify-start items-center'><FiEdit2 className='text-xl text-blue-500' /></div><div><AiOutlineDelete className=' text-xl text-blue-500'  /></div></div></td>
        </tr>
    </>
  )
}

export default Rowstyle
