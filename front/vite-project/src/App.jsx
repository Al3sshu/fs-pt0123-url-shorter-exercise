import { useState } from 'react'
import './App.css'
import Register from "./componets/Register";
import Login from "./componets/Login";
import Panel from "./componets/Panel";






function App() {

  return <div>
    <div className='register'><Register /></div>
    <div className='lig'> <Login /></div>
    <div> <Panel /> </div>
  </div>


}

export default App
