import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './context/DashboardContext';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </DashboardProvider>
    </Router>
  );
}

export default App;