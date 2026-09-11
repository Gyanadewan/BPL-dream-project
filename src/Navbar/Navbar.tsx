import React from 'react'
import NavLogo from'../assets/logo.png'
interface NavbarProps {
  coin: number
}
function Navbar({coin}:NavbarProps ) {
  return (
    <nav className='bg-amber-300'>
         <div className='container mx-auto flex justify-between '>
           <img className='p-2 ' src={NavLogo} alt="" />
                <div className='flex justify-center items-center gap-5'>
                  <ul className='flex gap-5 '>
                   <li><a href="">Home</a></li>
                   <li><a href="">Fixture</a></li>
                   <li><a href="">Teams</a></li>
                   <li><a href="">Schedules</a></li>
                </ul>
                 
                  <h2 className='text-2xl font-semibold'>{coin}</h2>
                </div>
         </div>
    </nav>
  )
}

export default Navbar
