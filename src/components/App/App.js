import React from 'react';
import TransportFlow from '../TransportFlow/TransportFlow';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <TransportFlow />
            </div>
        );
    }
}

export default App;
