// CharacterDetails.js
import React, { useState } from 'react';

function CharacterDetails() {
  const [note, setNote] = useState('');
  
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    // Handle note submission (store in local storage or database)
    event.preventDefault();
  };

  return (
    <div>
      <h2>Character Details</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Add a note about this character..."
          rows={4}
          cols={50}
        />
        <button type="submit">Save Note</button>
      </form>
      {/* Display existing notes if implemented */}
    </div>
  );
}

export default CharacterDetails;
