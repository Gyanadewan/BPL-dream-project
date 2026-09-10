import React from 'react'

import BanerImage  from '/src/assets/banner-main.png'
function Banner() {
  return (
   <div className="bg-amber-700">
  <div className="max-w-3xl mx-auto flex flex-col items-center text-center p-5">
    
    <img className="w-[200px] py-3" src={BanerImage} alt="" />
    <h3 className='text-white text-2xl '>Assemble Your Ultimate Dream 11 Cricket Team</h3>

    <p className='text-white py-4'>Beyond Boundaries Beyond Limits</p>

    <button className="bg-yellow-400 border-3 border-amber-50 rounded-xl px-5 ">
      Claim Free Credit
    </button>
  </div>

  </div>
  )
}

export default Banner
