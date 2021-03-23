import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    {
      text: 'If it hurts, do it more often',
      votes: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text:  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    }
  ]
   
  const [selected, setSelected] = useState(anecdotes[0])
  const [state, setState] = useState(anecdotes)

  const getRandomAnecdote = () => {
    const min = 0
    const max = state.length - 1
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
    const random = Math.floor(Math.random() *  (max - min + 1) + min)
    // ei samaa kahta kertaa peräkkäin
    if (state[random].text === selected.text) {
      getRandomAnecdote()
    } else {
      setSelected(state[random])
    }
  }

  const vote = () => {
    const newState = [...state]
    newState.map(item => {
      if (item.text === selected.text) {
        item.votes += 1
      }
    })
    setState(newState)
  }

  const getHighest = () => {
    return state.reduce((prev, current) => {
      return (prev.votes > current.votes) ? prev : current
    })
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          <p>{selected.text}</p>
          <p>has {selected.votes} votes</p>
        </div>
        <button onClick={vote}>Vote</button>
        <button onClick={getRandomAnecdote}>Next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>
          <p>{getHighest().text}</p>
          <p>has {getHighest().votes} votes</p>
        </div>
      </div>
    </div>
  )
}

export default App