/**
 * Created by sheeraz on 21/7/17.
 */
import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {CARD_WIDTH} from '../../constants/constants';
import {Divider, FlatButton, RaisedButton, TextField} from "material-ui";
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import EditorAttachFile from 'material-ui/svg-icons/editor/attach-file'

require('./ShareThoughts.scss');

class ShareThoughts extends Component {
    render() {
        return (
            <Card style={CARD_WIDTH}>
                <div className="share-thoughts">
                    {/*Later for type of messages*/}
                    {/*<div className="shared-thoughts-types">*/}
                        {/*Actions*/}
                    {/*</div>*/}
                    <div className="share-thoughts-wrapper">
                        <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar src="http://lorempixel.com/400/200/"/>
                                }
                            >
                                <TextField
                                    hintText="Share Your Thoughts"
                                    multiLine={true}
                                />
                            </ListItem>
                        </List>
                    </div>
                    <Divider />
                    <div className="share-thoughts-actions">
                        <div className="shared-thoughts-actions-left">
                            <FlatButton>
                                <EditorAttachFile/>
                            </FlatButton>
                        </div>
                        <div className="shared-thoughts-actions-right">
                            <FlatButton>
                                Public <HardwareKeyboardArrowDown/>
                            </FlatButton>
                            <RaisedButton label="Post" primary={true}/>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}
export default ShareThoughts;