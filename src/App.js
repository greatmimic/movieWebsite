

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faSearch);


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movieWebsite" element={<MainPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
