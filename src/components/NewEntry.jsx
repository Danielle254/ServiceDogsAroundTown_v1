import {React, useState} from 'react'

export default function NewEntry() {
  const [businessName, setBusinessName] = useState('');
  const [personalNote, setPersonalNote] = useState('');
  const [initializeFavorite, setInitializeFavorite] = useState(false);

  function updateInitializeFavorite () {
    setInitializeFavorite(!initializeFavorite);
  }

  function handleSubmit (event) {
    event.preventDefault();
    // to do: add new entry to the list
  }
  
  return (
    <div className='new--entry'>
      <h2>Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Business Name:
          <input 
          type='text' 
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Favorite:
          <input 
          type='checkbox' 
          checked={favorite}
          onChange={updateInitializeFavorite}
          />          
        </label>
        <br/>
        <label>Personal Note:
          <textarea 
          type='text' 
          value={personalNote}
          onChange={(e) => setPersonalNote(e.target.value)}
          />
        </label>

      </form>
    </div>
  )
}
