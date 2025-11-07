import React from 'react'
import { GrCurrency } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import webdata from "./Webdata.json"
import Rowstyle from './Rowstyle';

function Table() {
  return (
    <div className='w-full flex justify-center items-center'>
    <table className='w-9/10 table-auto border-separate border-spacing-y-3'>
    <thead>
        <tr className='text-gray-500 text-left h-10'>
            <th></th>
            <th>Client title</th>
            <th>Country</th>
            <th>Contact</th>
            <th className='w-40'>Email</th>
            <th>Status</th>
            <th>Activation date</th>
            <th>Balance</th>
            <th >Actions</th>
        </tr>
    </thead>
    <tbody>

        {webdata.map((object)=>{
            // console.log(object);
            
            return <Rowstyle data={object}/>
        })}
        </tbody>
        {/* <tr className='h-30 bg-white'>
            <td className='rounded-l-3xl w-30 p-5'><img className='h-15 w-15 rounded-xl' src='https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'/></td>
            <td><p className='font-bold text-2xl'>{webdata[0].title}</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-15'>United Kingdom</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-15'>Moddox Blackmore</p></td>
            <td><p className='text-sm font-medium text-gray-500 w-10'>mblackmore @netflix.com</p></td>
            <td><button className='bg-green-100 rounded-2xl px-3 py-1 text-green-500 font-semibold'>Activated</button></td>
            <td><p className='text-sm font-medium text-gray-500 w-20'><span className='text-black'>11 Mar 2021 </span>9:37 AM</p></td>
            <td className='bg-gray-100 p-5'><div className='flex items-center justify-center gap-5'><GrCurrency className='text-2xl' /> <p className='text-sm text-gray-500'><span className='font-bold'>15,000 </span>GBP</p> </div></td>
            <td className='px-4 w-40 rounded-r-3xl '><div className='flex justify-between items-center'><div className='border-r-2 h-25 border-gray-300 w-1/2 flex justify-start items-center'><FiEdit2 className='text-xl text-blue-500' /></div><div><AiOutlineDelete className='text-xl text-blue-500'  /></div></div></td>
        </tr> */}
    </table>
    </div>
  )
}

export default Table
