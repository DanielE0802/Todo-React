import React, { Component } from "react";

class TodoSearchInput extends Component{
    render(){
        return(
            <React.Fragment>
                <input type="text" placeholder="Busca tus tareas" />
            </React.Fragment>
        )
    }
}

export {TodoSearchInput}