import React, { Component } from 'react'
import TaskComponent from './TaskComponent'

export default class TodosComponent extends Component {
    render() {
        return (
            <div className='todos-component'>
                <h1>Todos</h1>
            <TaskComponent />
            </div>
        )
    }
}
