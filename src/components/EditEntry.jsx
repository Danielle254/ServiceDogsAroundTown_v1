import { React, useState } from "react";


export default function EditEntry(props) {
    if (props.editorOpen) {
        const [editBusinessName, setEditBusinessName] = useState(props.entryToEdit.name);
        const [editLocation, setEditLocation] = useState(props.entryToEdit.location);
        const [editDateVisited, setEditDateVisited] = useState(props.entryToEdit.dateVisited);
        const [editPersonalNote, setEditPersonalNote] = useState(props.entryToEdit.personalNote);
        const [editFavorite, setEditFavorite] = useState(props.entryToEdit.isFavorite);
        const entryId = props.entryToEdit.id;
        
        function updateEditFavorite () {
        setEditFavorite(!editFavorite);
        }
    
        const editedEntry = {
        name: editBusinessName,
        location: editLocation,
        dateVisited: editDateVisited,
        isFavorite: editFavorite,
        personalNote: editPersonalNote,
        id: entryId
        }
    
    
        return (
            <div className='edit--entry'>
                <div className="edit-form-background">       
                    <form onSubmit={(e) => {
                        props.closeEditor(e, editedEntry);          
                        }}>
                        <label>Business Name</label>
                        <input 
                        type='text' 
                        value={editBusinessName}                
                        onChange={(e) => setEditBusinessName(e.target.value)}
                        />        
                        <label>Location</label>         
                        <input 
                        type='text' 
                        value={editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                        />        
                        <label>Date Visited</label>          
                        <input 
                        type='date' 
                        value={editDateVisited}
                        onChange={(e) => setEditDateVisited(e.target.value)}
                        />            
                        <label>Personal Note</label>          
                        <textarea 
                        type='text' 
                        value={editPersonalNote}
                        onChange={(e) => setEditPersonalNote(e.target.value)}
                        />
                        <div className='favorite--container' >      
                        <input 
                        type='checkbox'
                        className='checkbox' 
                        checked={editFavorite}
                        onChange={updateEditFavorite}
                        />   
                        <label>Favorite</label>
                        </div>       
                        <br/>
                        <input type='submit' className='save--button' value='Save'/>
                        <button onClick={props.cancelEdit} className="cancel-edit">Cancel</button>
                    </form>
                    
              </div> 
            </div>
          )
    }
    
    
}
