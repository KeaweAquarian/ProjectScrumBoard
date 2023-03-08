//Author Keawe Aquarian
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import AgileValues from './components/AgileValues'
import AgilePrinciples from './components/AgilePrinciples'
import About from './components/About'
import ReadMe from './components/ReadMe'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [sprintBacklogTasks, setSprintBacklogTasks] = useState([])
  const [sprintToDo, setSprintToDo] = useState([])
  const [sprintInProgress, setSprintInProgress] = useState([])
  const [sprintCompleted, setSprintCompleted] = useState([])

  
  
//create task lists based on their progress
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
  }, [])


  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://json-server-xi-seven.vercel.app/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task by id
  const fetchTask = async (id) => {
    const res = await fetch(`https://json-server-xi-seven.vercel.app/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('https://json-server-xi-seven.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })


    // const data = await res.json()

    // setTasks([...tasks, data])
    // console.log(data)
    //Update components
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
    
  }



  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`https://json-server-xi-seven.vercel.app/tasks/${id}`, {
      method: 'DELETE',
    })

  //Set responce type.
    // res.status === 200
    //   ? setTasks(tasks.filter((task) => task.id !== id))
    //   : alert('Error task already deleted, refresh page!')
    //Update components
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
  }

    //Toggle Tested Task
    const toggleTested = async (id) => {

      const taskToToggle = await fetchTask(id)

            if(taskToToggle.progress !== "completed"){
            alert("Task not completed!")
            return
        }
    
      const upDate = {...taskToToggle, tested: !taskToToggle.tested}
      console.log(upDate)
      const res = await fetch(`https://json-server-xi-seven.vercel.app/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(upDate),
      })
      // const data = await res.json()

      // setTasks(
      //   tasks.map((task) =>
      //     task.id === id ? { ...task, tested: data.tested } : task
         
      //   )
      // )
      //Update components
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
      
    }

    // Toggle Priority
    const togglePriority = async (id) => {
      const taskToToggle = await fetchTask(id)
       let valueP = ""

       if (taskToToggle.priority === "low") {
        valueP = 'medium';
      } else if (taskToToggle.priority === "medium"){
        valueP = 'high';
      }else {
        valueP = 'low';
      }

      const updTask = { ...taskToToggle, priority: valueP
 
       }
  
      const res = await fetch(`https://json-server-xi-seven.vercel.app/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
  //create task lists based on their progress

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
  
      // const data = await res.json()
  
      // setTasks(
      //   tasks.map((task) =>
      //     task.id === id ? { ...task, priority: data.priority } : task
      //   )
      // )
    }
  // Set Progress
    const toggleProgress = async (id, progress) => {
      const taskToToggle = await fetchTask(id)


      const updTask = { ...taskToToggle, progress: progress
 
       }
  
      const res = await fetch(`https://json-server-xi-seven.vercel.app/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
  
      // const data = await res.json()
      // console.log(data)

//Update components
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setSprintBacklogTasks(tasksFromServer.filter((task) => task.progress !== "notCommited"))
      setSprintToDo(tasksFromServer.filter((task) => task.progress === "toDo"))
      setSprintInProgress(tasksFromServer.filter((task) => task.progress === "inProgress"))
      setSprintCompleted(tasksFromServer.filter((task) => task.progress === "completed"))
      
    }

    getTasks()
  
    }

  return (
    <Router >
      <div className='container'>

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    testedToggle={toggleTested}
                    priorityToggle={togglePriority}
                    progressToggle={toggleProgress}
                    
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/springBacklog' element={
              <>
                <Header title={"Spring Backlog"} 
              />{/* {showAddTask && <AddTask onAdd={addTask} />} */}
                
                {sprintBacklogTasks.length > 0 ? (
                  <Tasks
                    tasks={sprintBacklogTasks}
                    onDelete={deleteTask}
                    testedToggle={toggleTested}
                    priorityToggle={togglePriority}
                    progressToggle={toggleProgress}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/toDo' element={
              <>
                <Header title={"To Do"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {/* {showAddTask && <AddTask onAdd={addTask} />} */}
                {sprintToDo.length > 0 ? (
                  <Tasks
                    tasks={sprintToDo}
                    onDelete={deleteTask}
                    testedToggle={toggleTested}
                    priorityToggle={togglePriority}
                    progressToggle={toggleProgress}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/inProgress' element={
              <>
                <Header title={"In Progress"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {/* {showAddTask && <AddTask onAdd={addTask} />} */}
                {sprintInProgress.length > 0 ? (
                  <Tasks
                    tasks={sprintInProgress}
                    onDelete={deleteTask}
                    testedToggle={toggleTested}
                    priorityToggle={togglePriority}
                    progressToggle={toggleProgress}
                    
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route path='/completed'  element={
              <>
                <Header title={"Completed"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
              />
                {/* {showAddTask && <AddTask onAdd={addTask} />} */}
                {sprintCompleted.length > 0 ? (
                  <Tasks
                    tasks={sprintCompleted}
                    onDelete={deleteTask}
                    testedToggle={toggleTested}
                    priorityToggle={togglePriority}
                    progressToggle={toggleProgress}
                    
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
          } />
          <Route
           path='/agileValues'
            element={

            <AgileValues />} />

          <Route
           path='/agile12'
            element={

            <AgilePrinciples />} />

          <Route
           path='/about'
            element={

            <About />} />
            
          <Route
           path='/readMe'
            element={

            <ReadMe />} />
        
        </Routes>

        
        <Footer />
      </div>
    </Router>
  )
}

export default App
