import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components here
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import GroupCardDetail from '../components/GroupCardDetail/GroupCardDetail';

import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <LeftMenu />
            <Header/><br/>
            <GroupCardDetail
                groupName="Center for Mobile Cloud Computing(C4MCCR)"
                groupType="Private"
                groupAvatar="http://lorempixel.com/400/200"
                notificationCount="500"
                memberCount="10"
                updatedDate="21 Nov 2017"
                lastActivity="Mohd Sheeraz Completed Task1"
            />
            <GroupCardDetail
                groupName="Center for Mobile Cloud Computing(C4MCCR)"
                groupType="Private"
                groupAvatar="http://lorempixel.com/400/200"
                notificationCount="50"
                memberCount="10"
                updatedDate="21 Nov 2017"
                lastActivity="Mohd Sheeraz Completed Task1"
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
