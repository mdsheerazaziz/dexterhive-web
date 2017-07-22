/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';

//Material Ui
import Updates from 'material-ui/svg-icons/communication/forum';
import {blueGrey300} from 'material-ui/styles/colors';
import Profile from 'material-ui/svg-icons/social/person';
import Groups from 'material-ui/svg-icons/social/group';
import Library from 'material-ui/svg-icons/av/library-books';
import Drive from 'material-ui/svg-icons/action/perm-media';

// Stylesheets
require('./Widgets.scss');

export default class Widgets extends Component {
    render() {
        return (
            <ul className="widgets-container">
                <li className="">
                    <a>
                        <Updates color = {blueGrey300}/>
                        <span className="widget-name">Updates</span>
                    </a>
                </li>
                <li className="">
                    <a>
                        <Profile color = {blueGrey300}/>
                        <span className="widget-name">Profile</span>
                    </a>
                </li>
                <li className="">
                    <a>
                        <Library color = {blueGrey300}/>
                        <span className="widget-name">Library</span>
                    </a>
                </li>

                <li className="">
                    <a>
                        <Drive color = {blueGrey300}/>
                        <span className="widget-name">Storage</span>
                    </a>
                </li>
                <li className="">
                    <a>
                        <Groups color = {blueGrey300}/>
                        <span className="widget-name">Groups</span>
                    </a>
                </li>
            </ul>
    );
    }
}
