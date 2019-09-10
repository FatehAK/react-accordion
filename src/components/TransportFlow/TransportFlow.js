import React from 'react';
import './TransportFlow.scss';

class TransportFlow extends React.Component {

    addWaypoint() { }

    render() {
        return (
            <div className="transport-flow">
                <button className="add-waypoint" onClick={() => this.addWaypoint()}>Add</button>
            </div>
        );
    }
}

export default TransportFlow;
