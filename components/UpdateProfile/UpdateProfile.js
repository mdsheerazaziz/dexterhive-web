/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Stylesheets
require('./UpdateProfile.scss');

// Images
//TODO: This is dummy image
const profile = require('../../assets/img/profiletemp.jpg');
const cover = require('../../assets/img/covertemp.jpg');

export default class UpdateProfile extends Component {
    render() {
        return (
          <div className="profile-section-wrapper">
            <Card className = "profile-header">

                <CardHeader
                    title="Anshu Singh"
                    subtitle="Full Stack Web Application Developer"
                />

                <img src={cover} alt="" className="profile-header-cover"/>
                <div className="profile-pic-container">
                    <img src={profile}/>
                </div>
            </Card>
            <Card className="profile-description-card">
               <CardHeader
                title="Experience"
                />
            </Card>
            <Card className="profile-description-card">
                <CardHeader
                title="Education"
                />
            </Card>
          </div>
    );
    }
}
/**
 * Created by anshu on 21/07/17.
 */
