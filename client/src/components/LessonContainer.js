import React, {useState, useEffect} from "react";
import LessonCard from "./LessonCard"
import NavBar from "./NavBar";

function LessonContainer({currentUser, setCurrentUser}) {
    const [allLessons, setAllLessons] = useState([])
    const [allComments, setAllComments] = useState([])
    
    useEffect(() => (fetch("/lessons")
    .then(resp => resp.json())
    .then(lessons => setAllLessons(lessons))),[])

    useEffect(() => (fetch("/comments")
    .then(resp => resp.json())
    .then(comments => setAllComments(comments))),[])

    const renderLessons = allLessons.map((lesson) => (
        <LessonCard lesson={lesson} currentUser={currentUser} allComments={allComments}/>
    ) )
    return (
        <div className="browseLessonsList">
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            {renderLessons}
        </div>
    )
}

export default LessonContainer