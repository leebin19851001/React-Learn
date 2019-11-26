import React, { Component } from 'react'
import TaskList from "../TaskList"
import AddTask from "../AddTask"
export default class TaskContainer extends Component {

    state = {
        taskArr:[]
    }

    componentDidMount() {
        const ts =[];
        for(let i = 1; i <= 10; i ++) {
            ts.push({
                name:`任务${i}`,
                isFinished: Math.random() > 0.5
            })
        }

        this.setState({
            taskArr: ts
        })
    }
    

    render() {
        return (
            <div>
                <AddTask 
                    onAdd = { newTask => {
                        this.setState({
                            taskArr: [...this.state.taskArr, newTask]
                        })
                    }}
                />
                <TaskList  taskArr={this.state.taskArr}/>
            </div>
        )
    }
}
