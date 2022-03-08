import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = () => {
    const [country, setCountry] = useState("")
    const [data, setData] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const hook = () => {
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => {
            setData(response.data)
          })
      }
    useEffect(hook, [])

    const handleChange = (event) => {
        setCountry(event.target.value)
        let updated = data.filter(element => element.name.common.toUpperCase().includes(country.toUpperCase()))
        setFilteredList(updated)
    }

    
    return (
        <div>
            <form>
                find countries: <input value={country} onChange={handleChange}/>
            </form>
            <p>{filteredList.map(element => <li key={element.name.official}>{element.name.common}</li>)}</p>
            <p>{console.log(filteredList.length)}</p>
        </div>
    )
}

export default Filter