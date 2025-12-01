import React from 'react'
import './App.css'
import JSX from './components/JSX.jsx'
import UseState from './components/UseState.jsx'
import List from './components/lists.jsx'
import Add from './components/add.jsx'
import Lifecycle from './components/LifeCycle.jsx'
import Filter from './components/Filter.jsx'
import Name from './components/name.jsx'

function App() {

  return (
    <>
      <JSX />
      <Name />
      <UseState message="Explorer React" />
      <Add/>
      <Filter />
      <Lifecycle />
      <List />
       </>
  )
}

export default App
