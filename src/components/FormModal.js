import { TaskContext } from '../context/TaskContext'
import React from 'react'
import {useState} from 'react'
import { CloseIcon } from '@chakra-ui/icons'

function FormModal() {
    const { modal, setModal, addTask } = React.useContext(TaskContext)
    const [newTaskValues, setNewTaskValues] = useState('')

    const formSubmit = (event) => {
        event.preventDefault();
    //     const newTask = {
    //         'titulo': event.target[0].value,
    //         'descripción': event.target[1].value,
    //         'categoria': event.target[2].value,
    // }
    //     setNewTaskValues(event.target[0].value)
    //     console.log(newTaskValues)

    console.log(event.target[0].value)
    addTask(event.target[0].value)
    setModal(false)
    }

    

    return (
        <div className={`modal ${modal ? "--active" : "--close"}`} onKeyDown={(event) =>{event.key === 'Escape'? setModal(false): setModal(true)}} >
            <div className="wrapper-modal">
                <div className="close" onClick={() => setModal(false)} ><CloseIcon /> </div>

                <form className="form-modal" onSubmit={formSubmit} >
                    <label className="form-modal__label label" for="input-title">Titulo de la tarea</label>
                    <input id="input-title" className="input text" placeholder="Tareas para hoy" type="text" />
                    {/* <label className="form-modal__label label" for="input-title">Descripición de la tarea</label>
                    <textarea className="input textarea" placeholder="Sacar la basura" />
                    <label className="form-modal__label label" for="input-title">Seleciona la categoria</label>
                    <select >
                        <option value="default">Categorias</option>
                        <option value="hogar">Hogar</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="estudio">Estudio</option>
                        <option value="vacaciones">Vacaciones</option>
                    </select> */}
                    <button type="submit" className="btn btn-primary">
                        Crear tarea    
                    </button>

                </form>


            </div>
        </div>
    )
}


export { FormModal }