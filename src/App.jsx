import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioLandingPage from './pages/PortfolioLandingPage'; // Altere conforme seu caminho

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
