import React, { Component } from 'react'
import TodosComponent from './TodosComponent';

export default class NewTaskComponent extends Component {

    onPlusButtonClick = () => {
        let textVal = document.getElementById('task-input').value;
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
