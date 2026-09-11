

import Player from '../Player/Player'
import type { Iplayer } from '../../player'
import type { Dispatch, SetStateAction } from "react";

interface IavailAbleProps {
  players: Iplayer[]
  coin: number
  setCoin: React.Dispatch<React.SetStateAction<number>>
}
function AvailablePlayers({players,coin,setCoin}:IavailAbleProps) {
  return (
      <div className='container mx-auto grid grid-cols-3 gap-5 py-6'>
              {
           players.map((player,index) => <Player key={index} player={player} coin={coin} setCoin={setCoin}></Player>)
          } 
    </div>
  )
}

export default AvailablePlayers
