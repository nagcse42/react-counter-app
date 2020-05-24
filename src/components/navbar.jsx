import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#"> 
                NavBar 
                <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        )
    }
}
