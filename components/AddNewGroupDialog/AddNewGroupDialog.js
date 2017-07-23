import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


require('./AddNewGroupDialog.scss');

class AddNewGroupDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            groupType: 1
        }
    }
    handleGroupTypeChange = (event, index, value) => {
        this.setState({groupType: value})
    };

    handleDClose = () => {
        this.props.closeDialog();
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleDClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleDClose}
            />
        ];
        return (
            <div>
                <Dialog
                    title="Create New Group"
                    actions={actions}
                    modal={false}
                    open={this.props.openState}
                    onRequestClose={this.handleDClose}
                    autoScrollBodyContent={true}
                >
                    <div>
                        <div>
                            <TextField
                                hintText="My Group"
                                floatingLabelText="Group Name"
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="About the Group"
                                floatingLabelText="Description"
                                multiLine={true}
                            />
                        </div>
                        <div>
                            <SelectField
                                floatingLabelText="Group Type"
                                value={this.state.groupType}
                                onChange={this.handleGroupTypeChange}
                            >
                                <MenuItem value={1} primaryText="Research Group" />
                                <MenuItem value={2} primaryText="Research Lab" />
                                <MenuItem value={3} primaryText="General" />
                            </SelectField>
                        </div>
                        <div>
                            Group Visibility
                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                                <RadioButton
                                    value="public"
                                    label="Public"
                                />
                                <RadioButton
                                    value="private"
                                    label="Private"
                                />
                                <RadioButton
                                    value="invisible"
                                    label="Invisible"
                                />
                            </RadioButtonGroup>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}
export default AddNewGroupDialog;