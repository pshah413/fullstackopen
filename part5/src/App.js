import React, { useState, useEffect } from 'react'
import backend from './backend'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 2143367580 }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const add = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const name = JSON.stringify(persons.name).indexOf(JSON.stringify(nameObject.name));

    if (name === -1) {
      backend
        .create(backend.baseUrl, nameObject)
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${nameObject.name} is already added to the phonebook`)
    }
  }

  const hook = () => {
    backend
      .getAll()
      .then(response => setPersons(response))
  }
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
          number: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons => <Person key={persons.name} name={persons.name} number={persons.number}/>)}
    </div>
  )
}

const Person = ({ name, number }) => {
  return (
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

export default App