import './LandingPage.css'
import Carousel from "../components/Carousel.jsx";

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>מערכת לקביעת תורים</h1>
                <div className="landing-buttons">
                    <button>קביעת תורים</button>
                    <button>מחירון</button>
                </div>
                <Carousel/>
            </div>
        </div>
    )
}

export default LandingPage