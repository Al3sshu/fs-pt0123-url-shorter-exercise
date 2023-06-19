import { useState } from "react";


function Register() {

    const [name, setName]= useState ("");
   

    return <div className="create"> <><><h1> CREATE ACCOUNT</h1><label> Email:{name}  </label><br></br>
     
      <input type = "text" onChange= {(e) => {
        setName(e.target.value);
      } }></input></> <br></br>
      <label>password</label> <br></br><input></input> </> <br></br>
      <button onClick ={() => {alert("Entra")}} > Enter</button>   </div>
  }

  export default Register;