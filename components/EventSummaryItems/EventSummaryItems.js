/**
 * Created by sheeraz on 22/7/17.
 */
import React, {Component} from 'react';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';

require('./EventSummaryItems.scss');

class EventSummaryItems extends Component{
    render(){
        return(
            <div className="event-summary-wrapper">
                <div>
                    <div>Meeting 1</div>
                    <div>This is a small desciption</div>
                </div>
                <div>
                    <div><DeviceAccessTime/>2:00PM - 3:00PM</div>
                    <div><NotificationEventNote/>Tommorrow</div>
                    <div><CommunicationLocationOn/>CS DEPT</div>
                </div>
            </div>
        );
    }
}
export default EventSummaryItems;