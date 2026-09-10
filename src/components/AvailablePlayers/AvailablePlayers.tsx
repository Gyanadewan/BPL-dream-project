

import Player from '../Player/Player'
import type { Iplayer } from '../../player'



interface PlayerProps {
  players : Iplayer []
}
function AvailablePlayers({players}:PlayerProps) {
  return (
      <div className='container mx-auto grid grid-cols-3 gap-5 py-6'>
              {
           players.map((player,index) => <Player key={index} player={player}></Player>)
          } 
    </div>
  )
}

export default AvailablePlayers
