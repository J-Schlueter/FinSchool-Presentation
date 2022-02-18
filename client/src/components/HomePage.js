import NavBar from "./NavBar"
import FinSchool from "./Assets/FinSchool.png"
import {useNavigate} from "react-router-dom"


function HomePage({currentUser, setCurrentUser}) {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login')
    }
    const goSignup = () => {
        navigate('/signup')
    }
    return(
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="homePageDiv">
                <img src={FinSchool} alt="Fin School wallet logo"/>
                <h2>Ever wanted to know about how financial concepts but didn't know where to start?</h2>
                <p>We know that the earlier you learn the basics of how money works, the more confident and successful you'll be with your finances later in life. 
                    It's never too late to start learning, but it pays to have a head start. The first steps into the world of money start with education. 
                    Banking, budgeting, saving, credit, debt, and investing are the pillars that underpin most of the financial decisions we'll make in our lives. 
                    At FinSchool you can peruse a collection of articles, videos, and activities to learn financial information in an approachable way.</p>
                <button className="button button1" onClick={goLogin}>Login</button>
                <button className="button button1" onClick={goSignup}>Signup</button>
               
                
                
                
            </div>
            
        </div>
    )
}

export default HomePage