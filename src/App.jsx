/* eslint-disable no-unused-vars */
import React from 'react';
import './index.css';
import AppLayout from './components/AppLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tab_1 from './components/Tab_1';
import Tab_2 from './components/Tab_2';
import Tab_3 from './components/Tab_3';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Tab_1 />} />
          <Route path='tab1' element={<Tab_1 />} />
          <Route path='tab2' element={<Tab_2 />} />
          <Route path='tab3' element={<Tab_3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
