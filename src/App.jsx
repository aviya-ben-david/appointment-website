import './App.css'
import BookingButton from './components/BookingButton.jsx'
import Background from './components/Background.jsx'


function App() {
    return (
        <div className="home-page">
        <Background/>
            <div className="content">
                <h1>מערכת לקביעת תורים</h1>
                <BookingButton />
                <button>מחירון</button>
            </div>

        </div>
    )
}

export default App