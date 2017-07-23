/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// Stylesheets
require('./UpdateProfile.scss');

// Images
//TODO: This is dummy image
const profile = require('../../assets/img/profiletemp.jpg');
const cover = require('../../assets/img/covertemp.jpg');

export default class UpdateProfile extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

    const actions = [
            <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
    />,
    <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
    />
    ];

        return (
          <div className="profile-section-wrapper">
            <Card className = "profile-header">

                <CardHeader
                    title="Anshu Singh"
                    subtitle="Full Stack Web Application Developer"
                />

                <img src={cover} alt="" className="profile-header-cover"/>
                <div className="profile-pic-container">
                    <img src={profile}/>
                </div>
            </Card>

            <Card className="profile-description-card">
                <div className="add-button-wrapper">
                    <button className="add-button" onTouchTap={this.handleOpen} >
                        <AddIcon />
                    </button>
                </div>
                <CardHeader
                    title="Experience"
                        />
                    <div className="profile-list-wrapper">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </div>
                    </div>
                    <div className="profile-list-wrapper">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </div>
                    </div>
            </Card>


            <Card className="profile-description-card">
                <CardHeader
                    title="Experience"
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText >
                    <Card className="">
                        <CardHeader
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                </CardText>
            </Card>

            <Dialog
                title="Add Experience"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                    >

            </Dialog>




          </div>
    );
    }
}
/**
 * Created by anshu on 21/07/17.
 */
