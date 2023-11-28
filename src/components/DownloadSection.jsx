import React from 'react'
import arrow from "../assets/arrow.png"
import chart from "../assets/bar-chart.png"
import expenses from "../assets/expenses.png"
import health from "../assets/healthcare.png"
import arrowright from "../assets/right-arrow.png"

const DownloadSection = () => {
  const data =[
    {title:"Track heath of your animals", icon:chart},
    {title:"Track heath of your animals", icon:health},
    {title:"I Take control of expenses and Profits", icon:arrow},
    {title:"Identify profitable animals", icon:expenses},
  ];
  return (
    <div className='flex justify-center items-center py-24 gap-20 '>
        <div className="flex flex-col justify-center items-center text-center">
            <div className="text-lg font-bold text-[#39B54A]">THE ONE APP</div>
            <div className="text-4xl font-semibold text-center">That puts you back in contol </div>
            <hr className=' w-[450px] my-4 pb-7 border-solid border-1 border-black' />
            <button className='flex justify-center items-center gap-5 bg-[#39B54A] text-2xl font-semibold w-[369px] h-[78px] rounded-full'>Download App <img src={arrowright} alt="" className='w-[30px]'/></button>
        </div>
        <div className="flex flex-col gap-5">
        {
            data.map((data) => (

            <div key={data.id} className="flex justify-start items-center text-center gap-4 text-white bg-[#222222] w-[475px] py-4 px-5 rounded-2xl">
                <div className="bg-[#39B54A] p-3 rounded-full">

                <img src={data.icon} alt="" className='w-[30px] h-[30px] invert' />
                </div>
                <h4  className='text-xl font-semibold text-start '>{data.title}</h4>
            </div>
             
        
            ))
          }
        </div>
        
    </div>
  )
}

export default DownloadSection;