import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/dashboard';
import Sensor from './components/sensor';
import { ActivePageProvider } from './context/ActivePageContext';

const App: React.FC = () => {
  return (
    <Router>
      <ActivePageProvider>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/data" element={<Sensor />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </ActivePageProvider>
    </Router>
  );
};

export default App;
