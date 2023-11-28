import React from 'react'
import aos from "../assets/AndroidOS.png";
import ios from "../assets/AppleLogo.png";

const Header = () => {
  return (
    <nav className='flex w-full h-[60px] bg-black text-white justify-between items-center px-24 '>
        <div className='flex '>
            <h3>Herd Help</h3>
        </div>
        <div className="flex w-fit gap-5 ">
            <img src={aos} alt="" className='w-[30px] h-[30px]'/>
            <img src={ios} alt="" className='w-[30px] h-[30px]'/>
            <h3 className='text-green-500 font-semibold text-[20px] pl-5 '>Login</h3>
        </div>

    </nav>
  )
}

export default Header;