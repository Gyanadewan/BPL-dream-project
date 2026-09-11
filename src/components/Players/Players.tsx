import type { Iplayer } from '../../player'
import { use, useState, type Dispatch, type SetStateAction } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'
import SelectedPlayers from '../SelectedPlayers'

interface PlayerProps {
  playersDataFetch: Promise<Iplayer[]>
  coin: number
  setCoin: Dispatch<SetStateAction <number>>
  selectedPlayers: Iplayer []
  setSelctedPlayers: Dispatch<SetStateAction <Iplayer[]>>
}
function Players({playersDataFetch,coin,setCoin,selectedPlayers,setSelctedPlayers}:PlayerProps) {
   const players = use(playersDataFetch)

   const [buttonType,setButtonType] = useState("available")
     console.log("buttonType:", buttonType)
  
   const  setButtonHandler = (type:string)=> {
       setButtonType(type)
   }
  return (
     <div className='container mx-auto py-4'>
      <div className=' flex justify-between'>
         <h1 className='font-semibold text-2xl'>  {
          buttonType ==="available"? "Available Players"
          : "Selected Players"
         }</h1>
          
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
        
          {
          buttonType ==="available"?   <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers}  setSelctedPlayers={setSelctedPlayers}></AvailablePlayers> 
          :  <SelectedPlayers selectedPlayers={selectedPlayers}  setSelctedPlayers={setSelctedPlayers}  coin={coin}
          setCoin={setCoin}></SelectedPlayers>
         }
      
</div>
  )
}

export default Players
