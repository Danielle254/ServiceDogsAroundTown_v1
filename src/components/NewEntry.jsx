import {React, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function NewEntry(props) {

  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [dateVisited, setDateVisited] = useState('');
  const [personalNote, setPersonalNote] = useState('');
  const [initializeFavorite, setInitializeFavorite] = useState(false);

  function updateInitializeFavorite () {
    setInitializeFavorite(!initializeFavorite);
  }

  const newEntry = {
    name: businessName,
    location: location,
    dateVisited: dateVisited,
    isFavorite: initializeFavorite,
    personalNote: personalNote,
    id: uuidv4()
  }
  
  
  return (
    <div className='new--entry'>
      <h2>Add New Business</h2>
      <form onSubmit={(e) => {
        props.addEntry(e, newEntry);
        setBusinessName("");
        setInitializeFavorite(false);
        setPersonalNote("");
        setDateVisited("");
        setLocation("");
      }}>
        <label>Business Name *</label>
        <input 
        required
        type='text' 
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        />        
        <label>Location *</label>         
        <input 
        required
        type='text' 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />        
        <label>Date Visited *</label>          
        <input 
        required
        type='date' 
        value={dateVisited}
        onChange={(e) => setDateVisited(e.target.value)}
        />            
        <label>Personal Note *</label>          
        <textarea 
        required
        type='text' 
        value={personalNote}
        onChange={(e) => setPersonalNote(e.target.value)}
        />
        <div className='favorite--container' >      
          <input 
          type='checkbox'
          className='checkbox' 
          checked={initializeFavorite}
          onChange={updateInitializeFavorite}
          />   
          <label>Favorite</label>
        </div>       
        <br/>
        <input type='submit' className='submit--button'/>
      </form>
    </div>
  )
}
