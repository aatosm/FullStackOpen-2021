import React, { useState } from 'react'

const Feedback = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={props.setGood}>good</button>
      <button onClick={props.setNeutral}>neutral</button>
      <button onClick={props.setBad}>bad</button>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.average}</p>
      <p>positive: {props.positives}%</p>
    </div>
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
