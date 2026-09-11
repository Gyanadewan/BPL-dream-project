
import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../player";
import { toast } from "react-toastify";
import SelectedPlayers from "../SelectedPlayers";


interface IavailAbleProps {
  player: Iplayer
  coin: number
  setCoin: React.Dispatch<React.SetStateAction<number>>
  selectedPlayers:Iplayer[]
   setSelctedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

function Player({ player,coin,setCoin,selectedPlayers,setSelctedPlayers }: IavailAbleProps ) {
   const [isSelected,setSelcted] = useState(false)
   const handelSelectPlayer = () => {
         setSelcted(true)
         const newPrice = coin - player.price
         if (newPrice >= 0){
             setCoin(newPrice)
             toast(`${player.playerName} is purches successfully`)
         }
         else{
            toast ("tumar taka sej")
         }
         

         //selected players
         setSelctedPlayers([...selectedPlayers,player])
   }
  return (
    <div className=" container mx-auto   bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      
      {/* Player Image */}
      <div className=" bg-gray-100 flex items-center justify-center">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-full h-full "
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-800">
            {player.playerName}
          </h2>

          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            {player.playerType}
          </span>
        </div>

        <p className="text-gray-500 mb-4">
          🌍 {player.origin}
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">
              Batting:
            </span>{" "}
            {player.battingStyle}
          </p>

          <p>
            <span className="font-semibold text-gray-800">
              Bowling:
            </span>{" "}
            {player.bowlingStyle}
          </p>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-xl font-bold text-orange-600">
              ${player.price}
            </p>
          </div>

          <button onClick={()=>handelSelectPlayer()} className={isSelected === true? "bg-gray-200  text-white font-semibold px-5 py-2 rounded-lg transition":"bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition"}
            disabled = {isSelected === true? true : false}>
            {
              isSelected === true ? "Selected": "Choose player"
            }
            
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;