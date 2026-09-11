import { Suspense, useState } from "react"
import Banner from "./components/Banner/Banner"
import Players from "./components/Players/Players"
import Navbar from "./Navbar/Navbar"
import type { Iplayer } from "./player"


function App() {

const  [coin, setCoin] = useState (5000)

const playersDataFetch = async ():Promise <Iplayer[]> =>{
  const res = await  fetch ("/data.json")
  const data = await res.json()
  return data
}

  return (
    <>
      <Navbar coin={coin}></Navbar>
       <Banner></Banner>
       <Suspense fallback={<div>Players Loading..........</div>}>  
        <Players playersDataFetch ={playersDataFetch () } coin={coin} setCoin={setCoin}></Players>
       </Suspense>
    </>
  )
}

export default App
