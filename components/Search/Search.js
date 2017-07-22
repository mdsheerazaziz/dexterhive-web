/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';

import SearchIcon from 'material-ui/svg-icons/action/search';

// Stylesheets
require('./Search.scss');

// Images
const appLogo = require('../../assets/img/dexterhive.png');

export default class Search extends Component {
    render() {
        return (
            <form className="search-wrapper">
                <div className="search-bar">
                    <input placeholder="Search" className="search-input"/>
                    <span className="search-icon">
                        <SearchIcon />
                    </span>
                </div>
            </form>
    );
    }
}
