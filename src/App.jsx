import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
