import React, { Component } from 'react';
import Counter from './counter';

export default class counters extends Component {

    render() {
        console.log('Counters - rendered');

        return (
            <div>
               {this.props.counters.map(counter => 
               <Counter 
                    key={counter.id} 
                    counter={counter}
                    onDelete = {this.props.onDelete} 
                    onIncrement = {this.props.onIncrement}
                />)
               }
            </div>
        )
    }
}
