import React, { Component } from 'react'
import NavigationComponent from './NavigationComponent'
import NewTaskComponent from './NewTaskComponent'
import TodosComponent from './TodosComponent'
import CompletedTodosComponent from './CompletedTodosComponent'

export default class MainComponent extends Component {
    render() {
        return (
            <div className='main-component'>
                <NavigationComponent />
                <NewTaskComponent />
                <TodosComponent />
                <CompletedTodosComponent />
            </div>
        )
    }
}
