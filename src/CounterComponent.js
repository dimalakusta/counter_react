import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0 }
    }
    onClickMinus = () => {
        this.setState((state) => ({
            count : state.count -1
        }))
    }
    onClickPlus = () => {
        this.setState((state) => ({
            count : state.count +1
        }))
    }
    render() {
        return (
            <div>
                <h2>Counter:</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.onClickMinus} className="minus">- Minus</button>
                <button onClick={this.onClickPlus} className="plus">Plus +</button>
            </div>
        );
    }
}

export default CounterComponent;
