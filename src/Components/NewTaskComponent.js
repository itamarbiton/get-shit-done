import React, { Component } from 'react'
import TodosComponent from './TodosComponent';

export default class NewTaskComponent extends Component {

    onPlusButtonClick = () => {                                           //takes the task value
        let textVal = document.getElementById('task-input').value;
        document.getElementById('task-input').value = '';
        this.props.onTodos(textVal);
    }

    render() {
        return (
            <div className='new-task-component'>
                <input id='task-input' type='text' placeholder='Create a new task...'  ></input>     
                <button onClick={this.onPlusButtonClick} id='add-task'>+</button>         
            </div>
        )
    }
}
