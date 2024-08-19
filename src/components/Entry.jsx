import React from 'react'

export default function Entry(props) {
  const id = props.id;

  return (
    <div className='entry'>
      <h3>{props.name} <span>{props.isFavorite ? "❤️" : ""}</span></h3>
      <p>{props.location}</p>
      <p>{props.personalNote}</p>
      <button className='entry--button'>Edit</button>
      <button className='entry--button' onClick={() => props.deleteEntry(id)}>Delete</button>
    </div>
  )
}
