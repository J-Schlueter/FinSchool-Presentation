import React, {useState} from "react";
import {Link} from "react-router-dom";
import FinSchool from "./Assets/FinSchool.png";


function NavBar({currentUser, setCurrentUser}) {


    // const loggedInRender = (
    //     <div className="NavBar">
    //         <ul className="NavBarUL">
    //             <Link to= "/" className="navBarLink">Home</Link>
    //             <Link to= "/createevent" className="navBarLink">Create Event</Link>
    //             <Link to= "/profile" className="navBarLink">Profile</Link>
    //         </ul>
    //         <ul className = "NavBarULRight">
    //             <h4>{currentUser.name}</h4>
    //         </ul>
    //     </div>
    // )

    // const notLoggedInRender = (
    //     <div className="NavBar">
    //         <ul className="NavBarUL">
    //             <Link to= "/" className="navBarLink">Home</Link>
    //         </ul>
    //         <ul className = "NavBarULRight">
    //             <Link to= "/login" className="navBarLink">Login</Link>
    //             <Link to= "/signup" className="navBarLink">Signup</Link>
    //         </ul>
    //     </div>
    // )
    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(undefined)
              }
            })
      }

    function renderNav() {
        if(currentUser == undefined) {
            return <div className="NavBar">
            <image id="NavLogoType" src={FinSchool} alt="FinSchool wallet logo"/>
            <ul className="NavBarUL">
                <Link to= "/" className="navBarLink">FinSchool</Link>
            </ul>
            <ul className = "NavBarULRight">
                <Link to= "/login" className="navBarLink">Login</Link>
                <Link to= "/signup" className="navBarLink">Signup</Link>
            </ul>
        </div>
        } else {
            return <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/lessons" className="navBarLink">Lessons</Link>
                {/* <Link to= "/createevent" className="navBarLink">Create Event</Link> */}
                {/* <Link to= "/profile" className="navBarLink">Profile</Link> */}
            </ul>
            <ul className = "NavBarULRight">
                <h2 className="navBarLink">{currentUser.name}</h2>
                <Link to= "/login" onClick={() => handleLogout()} className="navBarLink">Logout</Link>
            </ul>
        </div>
        }
    }
    return (
       
        renderNav()
    )
}

export default NavBar;