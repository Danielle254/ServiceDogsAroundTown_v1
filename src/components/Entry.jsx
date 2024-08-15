import React from 'react'

export default function Entry(props) {
  

  return (
    <div className='entry'>
      <h3>{props.name}</h3>
      <p>{props.isFavorite ? "❤️" : "🤍"}</p>
      <p>{props.personalNote}</p>
      <button>Edit</button>
      <button /* onClick={() => props.deleteEntry(props.id)} */>Delete</button>
    </div>
  )
}
