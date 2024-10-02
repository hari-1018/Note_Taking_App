import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateNote = ({ notes, setNotes }) => {
  const navigate = useNavigate();
  const { id: noteId } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const noteToEdit = notes.find(note => note.id === parseInt(noteId));

  if (noteId && noteToEdit) {
    if (title === '' && description === '' && bgColor === '#ffffff') {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
      setBgColor(noteToEdit.bgColor);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: noteId ? parseInt(noteId) : Date.now(),
      title,
      description,
      bgColor
    };

    setNotes(prevNotes =>
      noteId
        ? prevNotes.map(note => (note.id === newNote.id ? newNote : note))
        : [...prevNotes, newNote]
    );

    navigate('/');
  };

  return (
    <div className='create-container'>
      <h3>{noteId ? 'Edit Your Note' : 'Create Your New Note'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your note's title"
            required
          />
        </div>
        <br />

        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add your description"
            required
            rows={5}
            style={{ width: '220px' }}
          />
        </div>
        <br />

        <div>
          <label>Background Color:</label>
          <input
            className='color'
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <br />

        <button className='save-button' type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateNote;
