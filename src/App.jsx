import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <header className='sticky'>
          <NavBar className="navbar" />
        </header>

        <main>
          <h1>First Commit!</h1>
        </main>

        <footer>
          <p>&copy; 2024 Michael Cook.</p>
        </footer>

      </BrowserRouter>
      
    </>
  )
}

export default App
