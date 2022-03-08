import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAvg(avg + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setAvg(avg - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} name="good"/>
      <Button handleClick={neutralClick} name="neutral"/>
      <Button handleClick={badClick} name="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} avg={avg}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad, avg}) => {
  if (good+neutral+bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={avg/(good+neutral+bad)}/>
      <StatisticLine text="positive" value ={good/(good+neutral+bad)*100}/> 
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return (
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
  )
}

export default App