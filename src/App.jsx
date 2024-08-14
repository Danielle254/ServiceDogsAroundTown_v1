import './App.css'
import {React, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'


function App() {
  const [sortBy, setSortBy] = useState('date');

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
        <NewEntry />
        <OrganizeList 
        sortBy={sortBy}
        changeSort={changeSort}        
        />
        <EntryList 
        sortBy={sortBy}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
