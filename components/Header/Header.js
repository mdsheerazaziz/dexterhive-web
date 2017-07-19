/**
 * Created by anshu on 19/07/17.
 */
import React, { PropTypes, Component } from 'react';

// Material Components
import AppBar from 'material-ui/AppBar';

// Stylesheets
require('./Header.scss');


class Header extends Component {
    render() {
        return (
            <header className="header">
                <AppBar title="DexterHive" />
            </header>
        );
    }
}

Header.propTypes = {
    // Add here
};

export default Header;
