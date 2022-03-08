import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.parts.map(c => <li key={c.id}>{c.name} {c.exercises}</li>)}</p>
            <Total parts={course.parts}/>
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0)
    return (
        <div>
            <p>there are a total of {total} exercises</p>
        </div>
    )
}
        
export default Course