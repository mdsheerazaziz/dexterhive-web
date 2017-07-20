/**
 * Created by Sheeraz on 20/07/17.
 */
import React, {Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import {CARD_WIDTH, MAX_NOTIFICATION_COUNT} from '../../constants/constants'

require('./GroupCardDetail.scss');

class GroupCardDetail extends Component {
    render() {
        return (
            <Card style={CARD_WIDTH}>
                {/*Group Detail Area*/}
                <div className="group-details">
                    {/*Left*/}
                    <div className="group-details-col-1">
                        <div className="notification-count-icon">
                            <span className="notification-count">
                                { (this.props.notificationCount < 100) ? (this.props.notificationCount) :
                                    MAX_NOTIFICATION_COUNT}
                            </span>
                        </div>
                        <CardHeader
                            title={this.props.groupName}
                            subtitle={this.props.groupType}
                            avatar={this.props.groupAvatar}
                        />
                    </div>
                    {/*Right*/}
                    <div className="group-details-col-2">
                        <div>{this.props.memberCount} Members</div>
                        <div>{this.props.updatedDate}</div>
                    </div>
                </div>
                {/*Group Activity*/}
                <div className="group-details-activity">
                    Last Activity: {this.props.lastActivity}
                </div>
            </Card>
        );
    }
}
export default GroupCardDetail;