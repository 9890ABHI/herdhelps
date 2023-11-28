import React from 'react'

const FeatureTwo = () => {
    const services = [
        { title: "Identify Profitable Animals", 
        desc: "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed." },
        { title: "Identify Profitable Animals", 
        desc: "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed." },
        { title: "Identify Profitable Animals", 
        desc: "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed." },
        { title: "Identify Profitable Animals", 
        desc: "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed." },
        
      ];
  return (
    
    <div className="flex flex-col  px-24 py-16 justify-center items-center">
        <div className='text-lg font-bold text-[#39B54A]'>WHAT WE DO</div>
        <div className='text-4xl font-semibold justify-center items-center text-center'>We{'’'}ve got everything you need to <br /> launch and grow your business
        </div>
        <hr className=' w-[450px] my-4 pb-7 border-solid border-1 border-black' />
        <div className="flex flex-wrap justify-evenly">
        {
            services.map((services) => (

             
        <div className="flex flex-col h-[200px] w-[40%] gap-5 mb-10">
            <h3 className='text-2xl font-semibold'>{services.title}</h3>
            <p className='text-sm font-normal ' style={{fontFamily:"lora"}}>{services.desc}</p>
        </div>
            ))
          }
        </div>
    </div>
  )
}

export default FeatureTwo;