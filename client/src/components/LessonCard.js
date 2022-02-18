import React, {useEffect, useState} from "react";

function LessonCard({lesson, currentUser, allComments}) {

    return(
        <div className="lessonCard">
            
            <h2>Topic: {lesson.topic}</h2>
            <h3>Style: {lesson.infotype}</h3>
            <iframe width="480" height="280" src={lesson.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Lesson info</h3>
            <p>{lesson.lesson_content}</p>
            <button className="button button1" >Go to lesson page</button>
            <button className="button button1" >See comments</button>
            

        </div>
    )
}

export default LessonCard