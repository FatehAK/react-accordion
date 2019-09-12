import React from 'react';
import Panel from './Panel';
import plus from '../../img/plus.svg';
import green_dot from '../../img/green_dot.svg';
import yellow_dot from '../../img/yellow_dot.svg';
import red_dot from '../../img/red_dot.svg';
import './TransportFlow.scss';

class TransportFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            panels: [],
            count: 1,
        };
        this.removePanel = this.removePanel.bind(this);
    }

    handleChange = (panel) => {
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
            count: prevState.count + 1
        }));
    }

    removePanel(panelToRemove) {
        this.setState((prevState) => ({
            panels: prevState.panels.filter((panel) => panel !== panelToRemove)
        }));
    }

    render() {
        console.log(this.state.panels);
        return (
            <div className="transport-flow">
                <Panel panel="srcPanel" expanded={this.state.expanded} handleChange={this.handleChange} />
                <Panel panel="destPanel" expanded={this.state.expanded} handleChange={this.handleChange} />
                {(this.state.panels.length > 0) && (this.state.panels.map((panel) => (
                    <Panel key={panel} allPanels={this.state.panels} panel={panel} expanded={this.state.expanded} handleChange={this.handleChange} removePanel={this.removePanel} />
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
