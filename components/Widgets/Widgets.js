/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import Updates from 'material-ui/svg-icons/alert/add-alert';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import {blueGrey300} from 'material-ui/styles/colors';

// Stylesheets
require('./Widgets.scss');

// Images
const appLogo = require('../../assets/img/dexterhive.png');

export default class Widgets extends Component {
    render() {
        return (
            <li className="">
                <ul>
                    <li className="" title="Updates">
                        <a>
                            <Updates color = {blueGrey300}/>
                            <span className="widget-name">Updates</span>
                        </a>
                    </li>
                    <li className="" title="Updates">
                        <a>
                            <Updates color = {blueGrey300}/>
                            <span className="widget-name">Updates</span>
                        </a>
                    </li>
                    <li className="" title="Updates">
                        <a>
                            <Updates color = {blueGrey300}/>
                            <span className="widget-name">Updates</span>
                        </a>
                    </li>
                </ul>
            </li>
    );
    }
}
