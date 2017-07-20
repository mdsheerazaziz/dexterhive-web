/**
 * Created by anshu on 19/07/17.
 */
import React, { PropTypes, Component } from 'react';

//Components
import Search from '../Search/Search';

// Stylesheets
require('./Header.scss');

// Images
//TODO: This is dummy image
const profile = require('../../assets/img/profiletemp.jpg');

class Header extends Component {
    render() {
        return (
            <div className="header">
               <Search/>
                <div className="profile-container">
                    <img src={profile}/>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    // Add here
};

export default Header;
