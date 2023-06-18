import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/AllNotes';

const App = () => {
  return (
    <div>
      <h1 className="header">Notes Application</h1>
      <AddNote />
      <section className="postitContainer">
        <Notes />
      </section>
    </div>
  );
};

export default App;
