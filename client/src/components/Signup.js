import NavBar from "./NavBar"
import React, {useState} from "react"

function Signup({currentUser, setCurrentUser, allUsers}) {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function submitEvent(e) {
        e.preventDefault()
        const matchingName = allUsers.find(u => u.name == name)
        if(matchingName == undefined) {
        const user = {
            name,
            password
        }
        fetch('http://localhost:3000/users',{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
            }
        })
        } else {
            console.log("Name already Exists!")
        }
    }

    function test() {
        console.log(currentUser)
    }
    return(
        <div>
        <NavBar />
            <div className="signup">
                <form className="signupForm">
                    <input placeholder="Name" className="signUpInput"  onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="Password" className="signUpInput"  onChange={(e) => setPassword(e.target.value)}></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                    <button onClick={(e) => submitEvent(e)}>Create Account</button>
                </form>
                    <button onClick={() => test()}>log current user</button>
            </div>
        </div>
    )
}

export default Signup