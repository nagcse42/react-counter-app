import React, { Component } from 'react'
import { stat } from 'fs';

export default class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps : ', prevProps);
        console.log('prevState : ', prevState);
    }

    componentWillUnmount(){
        console.log('component unmounted : ', this.props.counter.id);
    }

    render() {
        console.log('Counter - rendered');

        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}> {this.formatvalue()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m2">Delete</button>
            </React.Fragment>
        );
    }


    formatvalue() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    };

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
}
