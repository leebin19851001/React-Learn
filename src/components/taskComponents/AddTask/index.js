import React, { Component } from 'react'

export default class index extends Component {

    state = {
        name:''
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                    onChange = { e => {
                        this.setState({
                            name: e.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    this.props.onAdd && this.props.onAdd({
                        name:  this.state.name,
                        isFinished: false
                    })
                    this.setState({
                        name: "aaa"
                    })
                }}>添加任务</button>
            </div>
        )
    }
}
