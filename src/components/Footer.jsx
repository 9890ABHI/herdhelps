import React from 'react'
import bg from "../assets/Background.jpg"
import { TextField } from '@mui/material';

const Footer = () => {
  return (
    <div className='relative flex w-full '>
        <img src={bg} alt="" className='absolute z-0 inset-0 w-full' />
        <div className="flex flex-col w-full z-10 justify-center items-center py-16">
        <div className="text-lg font-bold text-[#39B54A] ">THE ONE APP</div>
            <div className="text-4xl font-semibold text-center text-white">That puts you back in contol </div>
            <div className="flex justify-center items-center py-10">
                <div className="bg-white w-[60%] h-28 py-10 px-10">
                    <h5 className='text-black text-lg font-bold '>SEND US A MESSAGE</h5>
                    <form action=""> 
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    </form>
                </div>
                <div className="bg-[#222222] w-[200px]"></div>
            </div>
        </div>
    </div>
  )
}

export default Footer;