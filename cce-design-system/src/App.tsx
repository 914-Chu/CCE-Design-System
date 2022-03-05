import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Components from './pages/Components';
import Content from './pages/Content';
import Design from './pages/Design';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/design" element={<Design />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
