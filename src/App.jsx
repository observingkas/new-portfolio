import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Footer from './Footer/Footer';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;