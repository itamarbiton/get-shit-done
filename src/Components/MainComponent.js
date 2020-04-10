import React, { Component } from 'react'
import NavigationComponent from './NavigationComponent'
import NewTaskComponent from './NewTaskComponent'
import TodosComponent from './TodosComponent'
import CompletedTodosComponent from './CompletedTodosComponent'

export default class MainComponent extends Component {
    onTodosClickFromNewTaskComponent = (taskVal) => {
        this.props.todos(taskVal);
        completed = false;
    };
    render() {
        for (let i = 0; i < addList.length; i++) {              //filter the new tasks and the completed tasks
            if (completed == false) {
                remove = taskVal;
            }
        }
        return (
            <div className='main-component'>
                <NavigationComponent />
                <NewTaskComponent onTodos={(taskVal) =>
                    onTodosClickFromNewTaskComponent(taskVal)} />
                <TodosComponent addList={addNewTask} />
                <CompletedTodosComponent removeTask={removeTask} />
            </div>
        )
    }
}
