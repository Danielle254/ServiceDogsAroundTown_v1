import './App.css'
import {React, useEffect, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'


function App() {
  const [sortBy, setSortBy] = useState(() => localStorage.getItem('SDAT_sort') || "date");
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('SDAT_data')) || []);
  const [filterFavorites, setFilterFavorites] = useState(() => localStorage.getItem('SDAT_filter') || false);
  

  // update local storage when list of entries changes
  useEffect(() => {
    localStorage.setItem('SDAT_data', JSON.stringify(data));
  }, [data]);


  function addEntry (e, entry) {
    e.preventDefault();
    setData([...data, entry]);    
  }

  function deleteEntry (id) {
    setData(prevData => {
      const newData = prevData.filter(
        item => item.id !== id
      )
      return newData;
    })
  }

  function compareAlpha(a,b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }

    return 0;
  }

  function compareDate(a,b) {
    const date1 = new Date(a.dateVisited);
    const date2 = new Date(b.dateVisited);

    return date1 - date2;
  }

  function changeSort () {
    setData(prevData => {
      
      if (sortBy === "date") {
        setSortBy("name");
        localStorage.setItem('SDAT_sort', JSON.stringify(sortBy));        
        return prevData.sort(compareAlpha);
      }

      if (sortBy === "name") {
        setSortBy("date");
        localStorage.setItem('SDAT_sort', sortBy);
        return prevData.sort(compareDate);
      }
    })    
  }

  function toggleFilterFavorites () {
    setFilterFavorites(!filterFavorites);
    localStorage.setItem('SDAT_filter', filterFavorites);
  }

  

  return (
    <div className='App'>
      <Banner />
      <main>
        <NewEntry 
        addEntry={addEntry}
        />
        <OrganizeList 
        sortBy={sortBy}
        changeSort={changeSort}
        toggleFilterFavorites={toggleFilterFavorites}        
        />
        <EntryList 
        sortBy={sortBy}
        data={data}
        filterFavorites={filterFavorites}
        deleteEntry={deleteEntry}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
