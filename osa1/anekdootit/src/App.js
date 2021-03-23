import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => {
    const min = 0
    const max = anecdotes.length - 1
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
    const random = Math.floor(Math.random() *  (max - min + 1) + min)
    // ei samaa kahta kertaa peräkkäin
    if (random === selected) {
      getRandomAnecdote()
    } else {
      setSelected(random)
    }
  }

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <button onClick={getRandomAnecdote}>Next anecdote</button>
    </div>
  )
}

export default App