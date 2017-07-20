/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';

//Components
import Widgets from '../Widgets/Widgets';

// Stylesheets
require('./LeftMenu.scss');

// Images
const appLogo = require('../../assets/img/dexterhive.png');

export default class LeftMenu extends Component {
    render() {
        return (
            <div className="leftmenu-wrapper">
                <div className="logo-section">
                    <img className="app-logo" src={appLogo} alt="Logo"/>
                </div>
                <div className="widget-section">
                    <Widgets/>
                </div>
            </div>
        );
    }
}
