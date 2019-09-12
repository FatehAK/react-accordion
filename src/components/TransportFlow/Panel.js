import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import contacts from '../../img/contacts.svg';
import green_dot from '../../img/green_dot.svg';
import yellow_dot from '../../img/yellow_dot.svg';
import red_dot from '../../img/red_dot.svg';
import './Panel.scss';

class Panel extends React.Component {
    checkPanel() {
        if (this.props.panel === this.props.start) {
            return <img src={green_dot} alt="source" />
        } else if (this.props.panel === this.props.end) {
            return <img src={red_dot} alt="destination" />
        } else {
            return <img src={yellow_dot} alt="midpoint" />
        }
    }

    render() {
        const { expanded, panel } = this.props;
        const currentPanel = parseInt(this.props.panel.replace(/[^\d.]/g, ''));

        return (
            <ExpansionPanel expanded={expanded === panel} onChange={this.props.handleChange(panel)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel1bh-header" aria-controls="panel1bh-content">
                    {(expanded === panel) ? (
                        <>
                            {this.checkPanel()}
                            <input className="expanded-input" type="text" onClick={(evt) => evt.stopPropagation()} />
                        </>
                    ) : (
                            <>
                                {this.checkPanel()}
                                <div>C20-402, Purva Swanlake, Kelambakam</div>
                                {(currentPanel > 2) && (
                                    <button type="button" onClick={(evt) => this.props.removePanel(evt, panel)}>Delete</button>
                                )}
                            </>
                        )}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="landmark-text-wrap">
                        <TextField id="landmark-text" label="Landmark" />
                    </div>
                    <div className="phone-text-wrap">
                        <TextField id="phone-text" label="Enter Phone" />
                        <img src={contacts} alt="contacts" />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default Panel;
