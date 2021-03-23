import React, { useState } from 'react'

const Feedback = (props) => {
  const { setGood, setNeutral, setBad } = props
  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" clickHandler={setGood} />
      <Button name="neutral" clickHandler={setNeutral} />
      <Button name="bad" clickHandler={setBad} />
    </div>
  )
}

const Button = ({ clickHandler, name }) =>
  <button onClick={clickHandler}>{name}</button>

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positives } = props
  return (
    <div>
      <h1>Statistics</h1>
      { all === 0 
      ?
      <div>
        <p>No feedback given</p>
      </div>
      :
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positives} char="%" />
          </tbody>
        </table>
      </div>
      }
    </div> 
  )
}

const StatisticLine = (props) => {
  const { text, value, char } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {char}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAll = () => {
    return good + neutral + bad
  }

  const getAverage = () => {
    return getAll() === 0 ? 0 : (good * 1 + bad * (-1)) / getAll()
  }

  const getPositives = () => {
    return getAll() === 0 ? 0 : (good / getAll()) * 100
  }

  return (
    <div>
      <Feedback
        setGood={() => setGood(good + 1)}
        setNeutral={() => setNeutral(neutral + 1)} 
        setBad={() => setBad(bad + 1)} 
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={getAll()}
        average={getAverage()}
        positives={getPositives()}
      />
    </div>
  )
}

export default App
