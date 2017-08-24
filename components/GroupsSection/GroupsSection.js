/**
 * Created by anshu on 20/07/17.
 */

import React, { Component } from 'react';
import GroupCardDetail from '../GroupCardDetail/GroupCardDetail';
import MainSectionHeader from '../MainSectionHeader/MainSectionHeader';
import AddNewGroupDialog from "../AddNewGroupDialog/AddNewGroupDialog";
// Stylesheets
require('./GroupsSection.scss');


class GroupsSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            addGroupDialogOpen: false
        };
    }

    handleOpen = () => {
        this.setState({addGroupDialogOpen: true});
    };

    handleClose = () => {
        this.setState({addGroupDialogOpen: false});
    };

    render() {
        return (
            <div className="group-section-wrapper">
                <br/><br/>
                <MainSectionHeader title="My Groups" openDialog={this.handleOpen}  openState={this.state.addGroupDialogOpen}>
                    <AddNewGroupDialog openState={this.state.addGroupDialogOpen} closeDialog={this.handleClose}/>
                </MainSectionHeader>
                <br/>
                <GroupCardDetail
                    groupName="Center for Mobile Cloud Computing(C4MCCR)"
                    groupType="Private"
                    groupAvatar="http://lorempixel.com/400/200"
                    notificationCount="500"
                    memberCount="10"
                    updatedDate="21 Nov 2017"
                    lastActivity="Mohd Sheeraz Completed Task1"
                />
            </div>
        );
    }
}

GroupsSection.propTypes = {
    // Add here
};

export default GroupsSection;
