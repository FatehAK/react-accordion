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
    render() {
        const { expanded, allPanels, panel } = this.props;
        return (
            <ExpansionPanel expanded={expanded === panel} onChange={this.props.handleChange(panel)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="panel1bh-header" aria-controls="panel1bh-content">
                    {(expanded === panel) ? (
                        <>
                            <img src={green_dot} alt="source" />
                            <input className="expanded-input" type="text" onClick={(evt) => evt.stopPropagation()} />
                        </>
                    ) : (
                            <>
                                <img src={green_dot} alt="source" />
                                <div>C20-402, Purva Swanlake, Kelambakam</div>
                            </>
                        )}
                    {/* {(panel !== 'srcPanel' && panel !== 'destPanel') && (
                        <button type="button" onClick={() => this.props.removePanel(panel)}>Delete</button>
                    )} */}

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
