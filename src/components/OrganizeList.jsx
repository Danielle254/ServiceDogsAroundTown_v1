import React from 'react'

export default function OrganizeList(props) {
  
  
  return (
    <div className='nav'>
      <div className='sort' >
        <p>Sort By:</p>
        <button className='sort--button' onClick={props.changeSort}>Date</button>
        <button className='sort--button' onClick={props.changeSort}>Business Name</button>
      </div>
      <button className='filter' onClick={props.filter}>Favorites</button>
    </div>
  )
}
