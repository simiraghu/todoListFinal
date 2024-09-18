import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleGetStarted = () => {

    localStorage.getItem('token') ? navigate('/your_todos') : navigate('/signin')

  }


  return (
    <div className='container text-center my-4'>

      <h1> Welcome to our ToDos App!</h1>
      <h5>Stay organized and on top of your tasks with our simple and intuitive ToDos App.
        <br /> Whether you're managing personal chores, work assignments,
        <br />
        or planning events, this app helps you keep track of everything with ease.</h5>

      <button className="btn btn-success my-3"
        onClick={() => handleGetStarted()}
      >Get started</button>

    </div>
  )
}

export default Home