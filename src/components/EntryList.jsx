import React from 'react'
import Entry from './Entry'

export default function EntryList(props) {
  
  const entries = props.data.map(
    entry => {
      return (
        <Entry 
        name={entry.name}
        location={entry.location}
        dateVisited={entry.dateVisited}
        isFavorite={entry.isFavorite}
        personalNote={entry.personalNote}
        id={entry.id}
        key={entry.id}
        deleteEntry={props.deleteEntry}
        />
      )
    }
  )

  
  
  return (
    <div className='entry--list'>
      {entries}
    </div>
  )
}
