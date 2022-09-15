import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSquareCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

    // Data ToDo List State
    const [toDo, setToDo] = useState([
        {
            'id': 1,
            'tittle' : 'Task 1',
            'status' : false
        },
        {
            'id': 2,
            'tittle' : 'Task 2',
            'status' : false
        }
    ])

    // Temp State
    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState('')

    // Add Task
    const addTask = () => {
        //
    }

    // Delete Task
    const delTask = (id) => {
        //
    }

    // Mark task
    const markDone = (id) => {
        //
    }

    // Cancel Update
    const cancelUpdate = () => {
        //
    }

    // Change task for update
    const changeTask = (e) => {
        //
    }

    // Update Task
    const updateTask = () => {
        //
    }

    return (
        <div className="container App">
            <br></br>
            <h2>To Do List App (ReactJS)</h2>
            <br></br>

            {/* Display Todo */}

            {toDo && toDo.length ? '' : 'No Tasks..'}

            {toDo && toDo 
                .map( (task, index) => {
                    return(
                        <React.Fragment key={task.id}>

                            <div className="col taskBg">
                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskNumber">{index + 1}</span>
                                    <span className="taskText">{task.tittle}</span>
                                </div>
                            </div>

                           
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}

export default App