import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex z-20 flex-col-reverse md:flex-row items-center justify-between text-white gap-5 md:gap-0' style={{marginTop:"20px",padding:"20px",paddingLeft:"20px",paddingRight:"20px"}}>
        {/* <div></div> */}
      <div className='flex flex-col gap-2'>
            <div className='text-2xl md:text-3xl'>Thank You For Stopping by!</div>
            <div className='text-sm md:text-md'>@ 2026 Palash</div>
      </div>
      <div className="h-[1px] w-80 bg-slate-700 rounded-2xl md:hidden"></div>
      <div className='flex flex-col gap-2 items-center md:items-end justify-center'>
            <div className='text-3xl flex gap-3 justify-center items-center'>
                
                <a href="https://www.instagram.com/_sonii_palash_" className="text-gray-400 cursor-pointer hover:text-white" ><i className='fa-brands fa-instagram'></i></a>
                <span className='cursor-pointer text-gray-400 hover:text-white'>

                <a href="https://www.facebook.com" ><i className='fa-brands fa-facebook'></i></a>
                </span>
            </div>
            <div className='text-sm md:text-md'>Connect with me on these Platforms</div>
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default Footer
