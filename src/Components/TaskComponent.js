import React, { Component } from 'react'

export default class TaskComponent extends Component {
    render() {
        return (
            //gets the task value
            <div className='task-component'>            
                <input className='radio-input' type='checkbox' ></input>
                <p className='demo-task'>{this.props.task}</p>  
                <p className='demo-date'>{this.props.date.toLocaleTimeString()}</p>    
            </div>
        )
    }
}
