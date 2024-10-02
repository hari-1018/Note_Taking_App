import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ notes, setNotes }) => {
  const navigate = useNavigate();

  const editNote = (note) => {
    navigate(`/create-note/${note.id}`, { state: { note } });
  };

  
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className='container'>
      <h2 className='heading'>SwiftNote: Notes Your Notes in a Flash</h2>
      <button className='create-button' onClick={() => navigate('/create-note')}>Create Note <i className="fa-solid fa-plus"></i></button>

      <div className='note-list'>
        {notes.length === 0 ? (
          <p className='warning'>No notes yet. Create a new one!</p>
        ) : (
          notes.map((note) => (
            <div className='listing-notes' key={note.id} style={{ backgroundColor: note.bgColor }}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <button className='edit-button' onClick={() => editNote(note)}>Edit <i className="fa-solid fa-pen-to-square"></i></button>
              <button className='dlt-button' onClick={() => deleteNote(note.id)}>Delete <i className="fa-solid fa-trash"></i></button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
