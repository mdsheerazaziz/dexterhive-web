/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

// Stylesheets
require('./Search.scss');

// Images
const appLogo = require('../../assets/img/dexterhive.png');

export default class Search extends Component {
    render() {
        return (
            <div className="search-wrapper">
                <TextField multiLine="false"
                    hintText="Search for authors, publications and research groups." />
            </div>
    );
    }
}
