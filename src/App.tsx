import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TabletAdd from './components/TabletAdd';
import TabletRemove from './components/TabletRemove';
import TabletList from './components/TabletList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabletAdd" element={<TabletAdd />} />
        <Route path="/tabletRemove" element={<TabletRemove />} />
        <Route path="/tabletList" element={<TabletList />} />
      </Routes>
    </Router>
  );
};

export default App;