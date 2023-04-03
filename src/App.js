import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Main from './Components/Main';
import Menu from './Shared/Menu';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;
