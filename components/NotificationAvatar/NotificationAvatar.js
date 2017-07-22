/**
 * Created by sheeraz on 22/7/17.
 */
import React, {Component} from 'react';
import {MAX_NOTIFICATION_COUNT} from '../../constants/constants';
import {Card, CardHeader} from 'material-ui/Card';


require('./NotificationAvatar.scss');

class NotificationAvatar extends Component{
   render(){
       return(
           <div>
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
       );
   }
}
export default NotificationAvatar