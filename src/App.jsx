import './App.css'
import BookingButton from './components/BookingButton.jsx'

function App() {
    return (
        <div className="home-page">

            <div className="background-blur"></div>

            <div className="background-image"></div>

            <div className="content">
                <h1>ברוכים הבאים למערכת לקביעת תורים</h1>

                <p>לקביעת תור לחצו בכפתור</p>

                <BookingButton />
            </div>

        </div>
    )
}

export default App