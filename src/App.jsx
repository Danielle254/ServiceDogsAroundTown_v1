import './App.css'
import {React, useEffect, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'


function App() {
  const [sortBy, setSortBy] = useState('date');
  const [data, setData] = useState([]);

  // retrieve any stored user entries from local storage upon initial app load
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('SDAT_data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

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
    } else if (sortBy === "name") {
      setSortBy("date");
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
