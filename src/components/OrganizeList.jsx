import React from 'react'

export default function OrganizeList(props) {
  let dateButton, nameButton = "";
  if (props.sortBy === "date") {
    dateButton = 'sort--button selected';
    nameButton = 'sort--button';
  }
  if (props.sortBy === "name") {
    dateButton = 'sort--button';
    nameButton = 'sort--button selected';
  }
  
  return (
    <div className='nav--background'>
      <div className='nav'>
        <div className='sort' >
          <p>Sort By:</p>
          <button className={dateButton} onClick={props.changeSort}>Date Visited</button>
          <button className={nameButton} onClick={props.changeSort}>Business Name</button>
        </div>
        <div className='filter'>
          <p>Filter By:</p>
          <button className='filter--button' onClick={props.toggleFilterFavorites}>Favorites ❤️</button>
        </div>
      </div>
    </div>
  )
}
