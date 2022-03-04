import NavBar from "./NavBar"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Login({allUsers, setCurrentUser, currentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

        
    
    function handleLogin(e) {
        e.preventDefault()
        // const validUsernames = (allUsers.filter((user) => user.name == name))
        // const validPassword = validUsernames.map(user => user.password)
        // console.log(validUsernames)

        // if(password == validPassword){
        //     console.log("Logged in!")
        //     setCurrentUser(validUsernames[0])
        // } else {
        //     console.log("Invalid Credentials")
        // }
        const userCreds = {
            username: username,
            password: password
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
          })
          .then(resp => resp.json())
          .then((user) => {
              if(user.username == undefined) {
                  setCurrentUser(undefined)
                  window.alert("Invalid Credentials")
              } else {
              console.log(user);
              setCurrentUser(user);
              setUsername("")
              setPassword("")}
          })

          navigate('/lessons')

    }
    return(
        <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="signup">
                <form className="signupForm">
                    <p>Login</p>
                    <input placeholder="Username" value={username} className="signUpInput" onChange={(e) => setUsername(e.target.value)}></input>
                    <input placeholder="Password" value={password} className="signUpInput" onChange={(e) => setPassword(e.target.value)}></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                </form>
                    <button onClick={(e) => handleLogin(e)} className="formButton">Login</button>
            </div>
        </div>
    )
}

export default Login