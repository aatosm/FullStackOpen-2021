import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => <h1>{course}</h1>

  const Content = ({ parts }) => 
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  
  const Total = ({ parts }) =>
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>

  const Part = ({ part, exercise }) => 
    <p>
      {part} {exercise}
    </p>

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div>
  )
}

export default App
