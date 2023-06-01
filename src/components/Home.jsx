import React,{useState,useEffect} from 'react'
import Task from './Task'

const Home = () => {

    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []

    const [tasks, setTasks] = useState(initialArray)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // submiting the task
    const submitHandler = (e)=>{
        e.preventDefault()
        setTasks([...tasks,{title, description}])
        
        setTitle("")
        setDescription("")
    }
    // deleting the tasks
    const deleteTask = (index)=>{
        const filteredArr = tasks.filter((val,ind)=>{
            return ind !== index
        })
        setTasks(filteredArr)
    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }, [tasks])
    

  return (
    <div className='container'> 
    <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder='Description'value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
        <button type='submit'>ADD</button>
      </form>
      {tasks.map((item,index)=>{
        return (<Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />)
        })}
         
    </div>
  )
}

export default Home
