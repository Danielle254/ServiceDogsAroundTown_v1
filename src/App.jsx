import './App.css'
import {React, useEffect, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'


function App() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('SDAT_data')) || []);
  const [sortBy, setSortBy] = useState(() => JSON.parse(localStorage.getItem('SDAT_sort')) || "date");  
  const [filterFavorites, setFilterFavorites] = useState(JSON.parse(localStorage.getItem('SDAT_filter')) || false);
    


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

  

  function changeSort () {    
         
      if (sortBy === "date") { 
        setSortBy("name");       
        localStorage.setItem('SDAT_sort', JSON.stringify("name"));        
      }

      if (sortBy === "name") {
        setSortBy("date");
        localStorage.setItem('SDAT_sort', JSON.stringify("date"));        
      }    
  }
  

  function toggleFilterFavorites () {    
    setFilterFavorites(!filterFavorites);    
    localStorage.setItem('SDAT_filter', JSON.stringify(!filterFavorites));
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
        filterFavorites={filterFavorites}       
        />
        <EntryList 
        data={data}
        sortBy={sortBy}
        filterFavorites={filterFavorites}
        deleteEntry={deleteEntry}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
