import React, { type Dispatch, type SetStateAction } from 'react'
import type { Iplayer } from '../player'
import Player from './Player/Player'
import { FaTrash } from 'react-icons/fa'
// import { FaTrashCan } from "react-icons/fa6";
interface IselectedPlayers {
   selectedPlayers:Iplayer[]
   setSelctedPlayers: Dispatch<SetStateAction<Iplayer[]>>
   
}
function SelectedPlayers({selectedPlayers,setSelctedPlayers}:IselectedPlayers) {
  
  const handleRemovePlayer = (player:Iplayer) => {
    const resPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName !==player.playerName)
    setSelctedPlayers(resPlayers)
   
  }
  return (
    <div>
        <div className='grid grid-cols-1 gap-5 my-6'>
            {
            selectedPlayers.map((player,index)=>  {
                return (
                    <div   key={index} className='flex justify-between border border-gray-400 p-2 rounded-xl'>
                        <div className='flex gap-5 '>
                             <img className='w-[50px] h-[50px]' src={player.playerImg} alt="" />
                            <div>
                               <h2 className='text-xl font-semibold'>{player.playerName}</h2>
                             <p>{player.playerType}</p>
                            </div>
                        </div>
                        <span onClick={()=>handleRemovePlayer(player)}>
                           {/* <FaTrashCan /> */}
                          <FaTrash className='text-red-500'></FaTrash>
                        </span>
                    </div>
              ) 
            } 
            
            )
          }
        </div>
    </div>
  )
}

export default SelectedPlayers
