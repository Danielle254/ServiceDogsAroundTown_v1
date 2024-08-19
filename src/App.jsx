import './App.css'
import {React, useEffect, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'


function App() {
  const [sortBy, setSortBy] = useState(() => JSON.parse(localStorage.getItem('SDAT_sort')) || "date");
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('SDAT_data')) || []);


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

  function changeSort () {
    if (sortBy === "date") {
      setSortBy("name");
      localStorage.setItem('SDAT_sort', JSON.stringify(sortBy));
    } else if (sortBy === "name") {
      setSortBy("date");
      localStorage.setItem('SDAT_sort', JSON.stringify(sortBy));
    }
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
        />
        <EntryList 
        sortBy={sortBy}
        data={data}
        deleteEntry={deleteEntry}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
