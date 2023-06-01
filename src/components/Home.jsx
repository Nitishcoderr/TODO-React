import React,{useState} from 'react'
import Task from './Task'

const Home = () => {
    const [inputValue, setInputValue] = useState(0)
  return (
    <div className='container'> 
    <h1>Daily Goals</h1>
      <form>
        <input type="text" placeholder='Title' />
        <textarea placeholder='Description'></textarea>
        <button type='submit'>ADD</button>
      </form>
      <Task/>
    </div>
  )
}

export default Home
