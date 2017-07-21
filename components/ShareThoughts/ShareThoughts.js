/**
 * Created by sheeraz on 21/7/17.
 */
import React, {Component} from 'react';
import {Card, CardTitle} from 'material-ui/Card';

require('./ShareThoughts.scss');

class ShareThoughts extends Component{
    render() {
        return (
            <Card>
                <div className="share-thoughts">
                    <div className="share-thoughts-data">
                        <div className="share-thoughts-avatar-wrapper"><img className="share-thoughts-avatar" src="http://lorempixel.com/400/200/" alt="User Avatar"/></div>
                        <div className="share-thoughts-input-wrapper">Text Areas</div>
                    </div>
                    <div className="share-thoughts-actions">Action Buttons</div>
                </div>
            </Card>
        );
    }
}
export default ShareThoughts;