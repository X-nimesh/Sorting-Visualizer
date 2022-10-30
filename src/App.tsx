import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SortAlgoVisualizer from './pages/SortAlgoVisualizer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box minH='100vh'>
      < Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sort-algo-visualizer" element={<SortAlgoVisualizer />} />
      </Routes>
    </Box >
  );
}

export default App;
