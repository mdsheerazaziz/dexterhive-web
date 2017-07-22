/**
 * Created by sheeraz on 21/7/17.
 */
import React, {Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import {CARD_WIDTH} from '../../constants/constants';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ContentReply from 'material-ui/svg-icons/content/reply';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import {Divider} from "material-ui";

require('./SharedThoughts.scss');

class SharedThoughts extends Component{
    render() {
        return (
            <Card style={CARD_WIDTH}>
                <div>
                    <CardHeader
                        title="Mohd Sheeraz"
                        subtitle="21 Nov 2017"
                        avatar="http://lorempixel.com/400/200/"/>
                    <div className="shared-thoughts-content">Hi friends, Cognizant hiring Salesforce.com developers,, architect,project managers across all location i.e Banglore pune Kolkata chennai ncr hyderabad mumbai. If any one interested please share resume.asap
                        lavakumarr.sai@gmail.com</div>
                </div>
                <Divider />
                <div className="shared-thoughts-actions">
                    <div>
                        <a>
                            <ActionThumbUp/>
                            <span>Like</span>
                        </a>
                    </div>
                    <div>
                        <a>
                            <CommunicationComment/>
                            <span>Comment</span>
                        </a>
                    </div>
                    <div>
                        <a>
                            <ContentReply/>
                            <span>Share</span>
                        </a>
                    </div>
                </div>
            </Card>
        );
    }
}
export default SharedThoughts;