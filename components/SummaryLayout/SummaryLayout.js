/**
 * Created by sheeraz on 21/7/17.
 */
// TODO Change  this to higher order component later (HOC)

import React, {Component} from 'react';
import {Card} from "material-ui/Card";
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import {CARD_WIDTH} from '../../constants/constants';
import ContentAdd from 'material-ui/svg-icons/content/add';

require('./SummaryLayout.scss');

class SummaryLayout extends Component {
    render(){
        return(
            <Card style={CARD_WIDTH} className="main-section-summary-header-card">
                <div className="summary-layout-header-wrapper">
                    <div className="summary-layout-header">
                        <div className="summary-layout-header-title">
                            {this.props.title}
                        </div>
                        <div className="summary-layout-header-actions">
                            <IconButton>
                                <ContentAdd />
                            </IconButton>
                        </div>
                    </div>
                    <Divider/>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </Card>
        );
    }
}


export default SummaryLayout;