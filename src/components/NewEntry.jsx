import {React, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function NewEntry(props) {
  const [businessName, setBusinessName] = useState('');
  const [personalNote, setPersonalNote] = useState('');
  const [initializeFavorite, setInitializeFavorite] = useState(false);

  function updateInitializeFavorite () {
    setInitializeFavorite(!initializeFavorite);
  }

  const newEntry = {
    name: businessName,
    isFavorite: initializeFavorite,
    personalNote: personalNote,
    id: uuidv4()
  }
  
  
  return (
    <div className='new--entry'>
      <h2>Add New Entry</h2>
      <form onSubmit={props.addEntry(newEntry)}>
        <label>Business Name:
          <input 
          required
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
          checked={initializeFavorite}
          onChange={updateInitializeFavorite}
          />          
        </label>
        <br/>
        <label>Personal Note:
          <textarea 
          required
          type='text' 
          value={personalNote}
          onChange={(e) => setPersonalNote(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}
