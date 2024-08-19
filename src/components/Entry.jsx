import React from 'react'

export default function Entry(props) {
  const id = props.id;

  return (
    <div className='entry'>
      <h3>{props.name} <span>{props.isFavorite ? "❤️" : ""}</span></h3>
      <p>{props.personalNote}</p>
      <button>Edit</button>
      <button onClick={() => props.deleteEntry(id)}>Delete</button>
    </div>
  )
}
