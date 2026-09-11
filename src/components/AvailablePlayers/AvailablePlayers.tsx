

import Player from '../Player/Player'
import type { Iplayer } from '../../player'
import type { Dispatch, SetStateAction } from 'react'


interface IavailAbleProps {
  players: Iplayer[]
  coin: number
  setCoin: Dispatch<SetStateAction <number>> 
  selectedPlayers:Iplayer[]
  setSelctedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}
function AvailablePlayers({players,coin,setCoin,selectedPlayers,setSelctedPlayers}:IavailAbleProps) {
  return (
      <div className='container mx-auto grid grid-cols-3 gap-5 py-6'>
              {
           players.map((player,index) => <Player key={index} player={player} coin={coin} setCoin={setCoin}
           selectedPlayers ={selectedPlayers} setSelctedPlayers={setSelctedPlayers}
           ></Player>)
          } 
    </div>
  )
}

export default AvailablePlayers
