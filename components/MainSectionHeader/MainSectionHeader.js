/**
 * Created by Sheeraz on 21/07/17.
 */
import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import {FONT_WEIGHT_600} from '../../constants/constants';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

require('./MainSectionHeader.scss');


class MainSectionHeader extends Component {

    constructor(props){
        super(props);
    }

    handleDOpen = () => {
        this.props.openDialog();
    };

    render() {
        return (
            <div>
                {this.props.children}
                <Card className="main-section-header-card">
                    <div className="main-section-header-main">
                        <div className="main-section-header-title">
                            {this.props.title}
                        </div>
                        <div className="main-section-header-actions">
                            <FloatingActionButton mini={true} onTouchTap={this.handleDOpen}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </div>
                    </div>
                </Card>

            </div>
        );
    }
}
export default MainSectionHeader;