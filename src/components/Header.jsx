import React from 'react'
import aos from "../assets/AndroidOS.png";
import ios from "../assets/AppleLogo.png";
import logo from "../assets/Herd-Help-Logo.png";

const Header = () => {
  return (
    <nav className='flex w-full h-[60px] bg-black text-white justify-between items-center px-24 fixed z-30 top-0 '>
        <div className='flex justify-start items-center '>
            {/* <h3>Herd Help</h3> */}
            <img src={logo} alt="" className=' w-[41%] invert'  />
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