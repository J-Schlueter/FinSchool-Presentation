import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import HomePage from './components/HomePage'
import LessonContainer from "./components/LessonContainer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [allUsers, setAllUsers] = useState([])
  const [allComments, setAllComments] = useState([])
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => setAllUsers(users))
  },[])

  useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then(resp => resp.json())
    .then(comments => setAllComments(comments))
},[])

useEffect(() => {
  fetch("/me", {
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setCurrentUser(user);
        setAuthenticated(true);
        console.log(user)
      });
    } else {
      setAuthenticated(true);
    }
  });
}, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/lessons" element={<LessonContainer currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path= "/profile" element={<Profile currentUser={currentUser} allComments={allComments} setCurrentUser={setCurrentUser}/>} />
        <Route path= "/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} allUsers={allUsers}/>} />
        <Route path= "/login" element={<Login allUsers={allUsers} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
