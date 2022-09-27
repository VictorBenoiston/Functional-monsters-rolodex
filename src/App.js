import { Component, useState, useEffect } from 'react'
import './App.css';
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

const App = (props) => {

  const [searchField, setSearchField] = useState('')
  const [monsterList, setMonsterList] = useState([])
  const [filteredMonstersList, setFilteredMonstersList] = useState(monsterList)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsterList(users))
  }, [])

  useEffect(() => {
    const filteredMonsters = monsterList.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonstersList(filteredMonsters)

  }, [searchField, monsterList])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString)  // searchField : searchField, defined the value with the same name.
  }

  return (
    <div className='App'>
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox onChangeFn={onSearchChange} className='monsters-search-box' placeHolder='Search Monsters'></SearchBox><br />
      <CardList list={filteredMonstersList} color={'white'} />
    </div>
  )

}

export default App;
