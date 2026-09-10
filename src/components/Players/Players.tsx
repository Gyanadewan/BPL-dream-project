
import type { Iplayer } from '../../player'
import { use, useState } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'
interface PlayerProps {
  playersDataFetch: Promise <Iplayer[]>
}
function Players({playersDataFetch}:PlayerProps) {
   const players = use(playersDataFetch)

   const [buttonType,setButtonType] = useState("available")
  
   const  setButtonHandler = (type:string)=> {
       setButtonType(type)
   }
  return (
     <div className='container mx-auto py-4'>
      <div className=' flex justify-between'>
         <h1 className='font-semibold text-2xl'>Available Players</h1>
          
  <div className="flex ">
  <button onClick={()=> setButtonHandler("available")} className={`px-4 py-2 rounded-2xl rounded-r-none ${
            buttonType === "available"
              ? "bg-yellow-400"
              : "bg-gray-200"
          }`}>
    Available
  </button>

  <button onClick={()=> setButtonHandler("selected")} className={`px-4 py-2 rounded-2xl rounded-l-none ${
            buttonType === "selected"
              ? "bg-yellow-400"
              : "bg-gray-200"
          }`}>
    Selected 
  </button>
</div>
        </div> 
         <AvailablePlayers players={players}></AvailablePlayers>
     </div>
    
  )
}

export default Players
