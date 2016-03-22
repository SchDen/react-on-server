import React from 'react';

function getState() {
    var initData;

    if (typeof window !== 'undefined' && 'initAppData' in window) {
        initData = window.initAppData;
    } else if (global && global.initAppData) {
        initData = global.initAppData;
    } else {
        initData = {
            items: [
                'Item 0',
                'Item 1',
            ],
            disabled: true,
        };
    }

    return initData;
}

var App = React.createClass({
    displayName: 'App',

    getInitialState() {
        return getState();
    },

    componentDidMount() {
        this.setState({
            disabled: false
        });
    },

    _handleClick() {
        this.setState({
            items: this.state.items.concat(`Item ${this.state.items.length}`),
        });
    },

    render() {
        var addButton = '';

        if (!this.state.disabled) {
            addButton = <button onClick={this._handleClick} type="button">Add</button>;
        }

        return (
            <div>
                {addButton}
                <ul>
                    {this.state.items.map((item, key) => {
                        return <li key={key}>{item}</li>;
                    })}
                </ul>
            </div>
        );
    },
});


export default App;
