import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './pages/Home';
import ModelS from './pages/Model';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/modelS" element={<ModelS />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
