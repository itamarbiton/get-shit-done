import React, { Component } from 'react'

export default class CompletedTodosComponent extends Component {
    render() {
        return (
            <div className='completed-todos-component'>
                <h1>Completed </h1>
                <div id='completed-component'>
                    <p className='demo-task'>Eat vegetables</p>
                    <p className='demo-date'>20/5/2020, 14:30</p>
                    <input id='radio-box' type='checkbox' ></input>
                </div>
            </div>
        )
    }
}
