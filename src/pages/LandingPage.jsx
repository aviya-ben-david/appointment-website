import './LandingPage.css'
import Background from '../components/Background.jsx'

function LandingPage() {
    return (
        <div className="landing-page">
            <Background />

            <div className="landing-content">
                <h1>מערכת לקביעת תורים</h1>

                <button>קביעת תור</button>
                <button>מחירון</button>
            </div>
        </div>
    )
}

export default LandingPage