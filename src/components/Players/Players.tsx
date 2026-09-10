
import type { Iplayer } from '../../player'
import { use } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers'
interface PlayerProps {
  playersDataFetch: Promise <Iplayer[]>
}
function Players({playersDataFetch}:PlayerProps) {
   const players = use(playersDataFetch)
  
  return (
     <div className='container mx-auto py-4'>
      <div className=' flex justify-between'>
         <h1 className='font-semibold text-2xl'>Available Players</h1>
          
  <div className="flex gap-3">
  <button className="bg-yellow-400 px-5 py-2 rounded-lg font-semibold">
    Available
  </button>

  <button className="bg-gray-200 px-5 py-2 rounded-lg font-semibold">
    Selected
  </button>
</div>
        </div> 
         <AvailablePlayers players={players}></AvailablePlayers>
     </div>
    
  )
}

export default Players
