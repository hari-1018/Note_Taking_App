import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  return (

      <Routes>
        <Route 
          path="/" 
          element={<Home notes={notes} setNotes={setNotes} />} 
        />
        <Route 
          path="/create-note" 
          element={<CreateNote notes={notes} setNotes={setNotes} />} 
        />
        <Route 
          path="/create-note/:id" 
          element={<CreateNote notes={notes} setNotes={setNotes} />} 
        />
      </Routes>
   
  );
}

export default App;
