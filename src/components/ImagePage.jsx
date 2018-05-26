import React from 'react';
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from '../appSettings';
import { Glyphicon, Navbar, Panel, Button } from 'react-bootstrap';
import _ from 'lodash';
import ImageView from './ImageView';

class ImagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }
    render() {
        const { post } = this.state;

        //if (!post || !post.imageData) {
        //    return (<div className="loader"></div>);
        //}
        return (
            <div>
                Hello from Image Page!!
            </div>
        );
    }
}
export default ImagePage;