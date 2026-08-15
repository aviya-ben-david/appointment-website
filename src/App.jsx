import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Background from './components/Background.jsx'

function App() {
    return (
        <div className="app">
            <Background />
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </div>
    )
}
export default App