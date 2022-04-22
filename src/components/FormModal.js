import { TaskContext } from '../context/TaskContext'
import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import Swal from 'sweetalert2'

function FormModal() {
    const { modal, setModal, addTask } = React.useContext(TaskContext)

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        addTask([event.target[0].value, event.target[1].value, event.target[2].value])
        setModal(false)
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Tarea creada correctamente',
            showConfirmButton: false,
            timer: 2500
          })
    }



    return (
        <div className={`modal ${modal ? "--active" : "--close"}`} onKeyDown={(event) => { event.key === 'Escape' ? setModal(false) : setModal(true) }} >
            <div className="wrapper-modal">
                <div className="close" onClick={() => setModal(false)} ><CloseIcon /> </div>

                <div className="form-container">
                <form className="form-modal" onSubmit={formSubmit} >
                    <label className="form-modal__label label" for="input-title">Titulo de la tarea</label>
                    <input required id="input-title" className="input text" placeholder="Tareas para hoy" type="text" />
                    <label className="form-modal__label label" for="input-description">Descripición de la tarea</label>
                    <textarea required className="input textarea" id="input-description" placeholder="Sacar la basura" />
                    <label lassName="form-modal__label label" for="category">Seleciona la categoria</label>
                    <select required id="category" >
                        <option value="default">Categorias</option>
                        <option value="home">Hogar</option>
                        <option value="work">Trabajo</option>
                        <option value="school">Estudio</option>
                        <option value="beach-access">Vacaciones</option>
                    </select>
                    <button  type="submit" className="btn btn-primary">
                        Crear tarea
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}


export { FormModal }