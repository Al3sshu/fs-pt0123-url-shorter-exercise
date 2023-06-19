

function Login() {



    return <div className="login"><h1>LOGIN</h1> <form> <label for= "email">Email</label> <br></br>
    <input type="text" ></input><br></br>
    <label for= "username">Username</label> <br></br>
    <input type="text" ></input> <br></br> <label for= "password">Password</label> <br></br>
    <input type="text"></input><br></br> <button onClick={() => {alert("Creado")}} >Create</button> </form> </div>
  }

  export default Login;