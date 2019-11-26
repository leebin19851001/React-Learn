import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css"

export default class Task extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired
    }


    render() {
        return (
            <li className={this.props.isFinished?"finish":""}>{this.props.name}</li>
        )
    }
}
