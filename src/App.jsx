// src/App.js
import { useState } from 'react';
import React from 'react';
import './index.css';
import Hamburger from 'hamburger-react';
import Dashboard from './pages/Dashboard';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='flex bg-black min-h-screen h-full'>
      <main className='flex-grow bg-black'>
        <nav className='h-12 text-white border-b-2 border-b-slate-600 bg-slate-900'>
          <div className='flex items-center h-full'>
            <a className='text-sm text items-center flex  font-bold'><Hamburger distance='sm' size={16} toggled={isOpen} toggle={setOpen} /> {`Home > Dashboards > NETH`}
            </a>      
          </div>
        </nav>
        <div>
        <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;
