import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './TransportFlow.scss';

class TransportFlow extends React.Component {
    state = {
        expanded: false,
        points: [],
        count: 3
    };

    handleChange = (panel) => {
        return (evt, isExpanded) => {
            console.log('isExpanded', isExpanded);
            if (isExpanded) {
                console.log('expanded', panel);
                this.setState({ expanded: panel });
            } else {
                console.log('closed', panel);
                this.setState({ expanded: false });
            }
        }
    };

    addWaypoint = () => {
        console.log(this.state.count);
        const arr = [];
        const pointPanel = (
            <ExpansionPanel expanded={this.state.expanded === `panel${this.state.count}`} onChange={this.handleChange(`panel${this.state.count}`)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={`panel${this.state.count}bh-header`} aria-controls={`panel${this.state.count}bh-content`}>
                    {(this.state.expanded === `panel${this.state.count}`) ? (
                        <input type="text" value="Add Waypoint" style={{ border: '1px solid blue' }} />
                    ) : (
                            <input type="text" value="Add Waypoint" />
                        )}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Some more text</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
        arr.push(pointPanel);
        // this.setState((prevState) => ({
        //     points: [...prevState.points, pointPanel],
        //     count: prevState.count + 1
        // }));
        this.setState({
            points: [...arr]
        })
    };

    render() {
        console.log('state', this.state);
        return (
            <div className="transport-flow">
                {/* panel 1 */}
                <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel1bh-header" aria-controls="panel1bh-content">
                        {(this.state.expanded === 'panel1') ? (
                            <input type="text" value="General Settings" style={{ border: '1px solid blue' }} />
                        ) : (
                                <input type="text" value="General Settings" />
                            )}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>Some Text</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* panel 2 */}
                <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel2bh-header" aria-controls="panel2bh-content">
                        {(this.state.expanded === 'panel2') ? (
                            <input type="text" value="More Settings" style={{ border: '1px solid blue' }} />
                        ) : (
                                <input type="text" value="More Settings" />
                            )}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>Some more text</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {this.state.points.map((point) => point)}
                <button className="add-waypoint" onClick={() => this.addWaypoint()}>Add</button>
            </div>
        );
    }
}

export default TransportFlow;
