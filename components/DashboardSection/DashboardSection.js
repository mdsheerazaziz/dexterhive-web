/**
 * Created by sheeraz on 21/7/17.
 */
import React, { Component } from 'react';
import SharedThoughts from "../SharedThoughts/SharedThoughts";

// Stylesheets
require('./DashboardSection.scss');

class DashboardSection extends Component {
    render() {
        return (
            <div className="dashboard-section-wrapper">
                <br/><br/>
                <SharedThoughts/>
            </div>
        );
    }
}

export default DashboardSection;
