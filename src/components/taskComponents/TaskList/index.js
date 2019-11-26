import React, { Component } from 'react'
import Task from "../Task"
import PropTypes from "prop-types"

export default class TaskList extends Component {

    static propTypes = {
        taskArr: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            isFinished: PropTypes.bool.isRequired
        })).isRequired
    }
    render() {
        var ts = this.props.taskArr.map((it, i) => <Task key={i} { ...it}/>)
        console.log(ts);
        return (
            <ul>
                { ts }
            </ul>
        )
    }
}
