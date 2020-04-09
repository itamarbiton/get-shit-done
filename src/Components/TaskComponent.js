import React, { Component } from 'react'

export default class TaskComponent extends Component {
    render() {
        return (
            <div className='task-component'>
                <input className='radio-input' type='checkbox' ></input>
                <p className='demo-task'>Eat vegetables</p>
                <p className='demo-date'>20/5/2020, 14:30</p>
            </div>
        )
    }
}
