import React, { Component } from 'react'

export default class NavigationComponent extends Component {
    render() {
        return (
            <div className='navigation-component'>
               <h4 id='logo'>Get 💩 Done!</h4>
               <button onClick={this.props.onLoginClick}>Login</button> 
            </div>
        )
    }
}
