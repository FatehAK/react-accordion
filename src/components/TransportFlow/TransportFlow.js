import React from 'react';
import Panel from './Panel';
import plus from '../../img/plus.svg';
import './TransportFlow.scss';

class TransportFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            panels: ['panel1', 'panel2'],
            count: 3,
            start: 'panel1',
            end: 'panel2'
        };
        this.removePanel = this.removePanel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(panel) {
        return (evt, isExpanded) => {
            if (isExpanded) {
                this.setState({ expanded: panel });
            } else {
                this.setState({ expanded: false });
            }
        };
    };

    addPanel() {
        this.setState((prevState) => ({
            panels: [...prevState.panels, `panel${this.state.count}`],
            count: prevState.count + 1,
            end: `panel${this.state.count}`
        }));
    }

    removePanel(evt, panelToRemove) {
        evt.stopPropagation();

        this.setState((prevState) => ({
            panels: prevState.panels.filter((panel) => panel !== panelToRemove)
        }));

        //handle edge case when removing last panel in the list
        const removedCount = parseInt(panelToRemove.replace(/[^\d.]/g, ''));
        const endCount = parseInt(this.state.end.replace(/[^\d.]/g, ''));
        if (endCount === removedCount) {
            this.setState((prevState) => ({
                end: prevState.panels[prevState.panels.length - 1]
            }));
        }
    }

    render() {
        return (
            <div className="transport-flow">
                {(this.state.panels.map((panel) => (
                    <Panel
                        key={panel}
                        panel={panel}
                        expanded={this.state.expanded}
                        start={this.state.start}
                        end={this.state.end}
                        handleChange={this.handleChange}
                        removePanel={this.removePanel}
                    />
                )))}
                <div className="add-waypoint-wrap">
                    <button className="add-waypoint" onClick={() => this.addPanel()}>
                        <span>Add point</span>
                        <img src={plus} alt="add point" width="20px" height="22px" />
                    </button>
                </div>
            </div>
        );
    }

}

export default TransportFlow;
