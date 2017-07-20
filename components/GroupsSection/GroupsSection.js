/**
 * Created by anshu on 20/07/17.
 */

import React, { PropTypes, Component } from 'react';
import GroupCardDetail from '../GroupCardDetail/GroupCardDetail';
// Stylesheets
require('./GroupsSection.scss');


class GroupsSection extends Component {
    render() {
        return (
            <div className="group-section-wrapper">
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
