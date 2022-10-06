import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './pages/Home';
import { ModelsPage, Model3Page, ModelxPage, ModelyPage } from './pages/Model';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ModelS" element={<ModelsPage />} />
                    <Route path="/Model3" element={<Model3Page />} />
                    <Route path="/ModelX" element={<ModelxPage />} />
                    <Route path="/ModelY" element={<ModelyPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
