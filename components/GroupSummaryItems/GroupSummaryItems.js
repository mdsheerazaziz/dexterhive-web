/**
 * Created by sheeraz on 22/7/17.
 */
import React, {Component} from 'react';
import NotificationAvatar from "../NotificationAvatar/NotificationAvatar";

require('./GroupSummaryItems.scss');

class GroupSummaryItems extends Component{
    render(){
        return(
            <div>
                <div className="group-details">
                    {/*Left*/}
                    <div className="group-details-col-1">
                        <NotificationAvatar
                            notificationCount="50"
                            groupName="My Group"
                            groupType="Private"
                            groupAvatar="http://lorempixel.com/400/200/sports/"
                        />
                    </div>
                    {/*Right*/}
                    <div className="group-details-col-2">
                        <div className="member-avatar-wrapper">
                            <img className="member-avatar" src="http://lorempixel.com/400/200/" alt="members"/>
                            <img className="member-avatar" src="http://lorempixel.com/400/200/" alt="members"/>
                            <img className="member-avatar" src="http://lorempixel.com/400/200/" alt="members"/>
                            <img className="member-avatar" src="http://lorempixel.com/400/200/" alt="members"/>
                            <span>+9</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupSummaryItems;
