import React, { type Dispatch, type SetStateAction } from 'react'
import type { Iplayer } from '../player'
import { FaTrash } from 'react-icons/fa'
// import { FaTrashCan } from "react-icons/fa6";
interface IselectedPlayers {
   selectedPlayers:Iplayer[]
   setSelctedPlayers: Dispatch<SetStateAction<Iplayer[]>>
    coin: number
  setCoin: Dispatch<SetStateAction <number>>
}
function SelectedPlayers({selectedPlayers,setSelctedPlayers,coin, setCoin}:IselectedPlayers) {
  
  const handleRemovePlayer = (player:Iplayer) => {
    const resPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName !==player.playerName)
    setSelctedPlayers(resPlayers)
    setCoin(prevCoin => prevCoin + player.price)
  }
  if (selectedPlayers.length ===0 ){
    return <h1 className='text-4xl font-bold text-center text-red-500'>No Selected Players</h1>
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
