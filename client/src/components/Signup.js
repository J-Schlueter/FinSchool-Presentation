import NavBar from "./NavBar"
import React, {useState} from "react"
import {Link} from "react-router-dom";

function Signup({currentUser, setCurrentUser, allUsers}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function submitEvent(e) {
        e.preventDefault()
        const matchingName = allUsers.find(u => u.username == username)
        if(matchingName == undefined) {
            const user = {  
                username: username,
                password: password
            }
            
            fetch('/users',{
                method: "POST",
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.ok){
                    res.json().then(setCurrentUser)
                } else {
                    res.json().then((errors) => {
                      console.error(errors);
                    });
                  }
                // debugger
                window.location.href = "/login";
                // setCurrentUser(user)
            })
        } else {
            window.alert("Username is taken!")
        }
    }

    // function test() {
    //     console.log(currentUser)
    // }
    return(
        <div>
        <NavBar setCurrentUser={setCurrentUser}/>
            <div className="signup">
                <form className="signupForm" >
                    <p>Signup</p>
                    <input placeholder="Username" className="signUpInput"  onChange={(e) => setUsername(e.target.value)}></input>
                    <input placeholder="Password" className="signUpInput"  onChange={(e) => setPassword(e.target.value)}></input>
                </form>
                    <button onClick={(e) => submitEvent(e)} className="formButton">Create Account</button>
            </div>
        </div>
    )
}

export default Signup