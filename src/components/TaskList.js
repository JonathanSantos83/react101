import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

//import TaskItem from './TaskItem';
import { fetchTasks, deleteTask } from '../actions';

class TaskList extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }
    
    render() {
        return this.props.tasks.map(task => {
            return (
                <div className="row">
                    <div>
                        <ul className="task-list">
                            <li className={`task-list-item status-${task.status}`} key="{ task.id }">
                                <span className="icon-check">
                                    <i
                                        className="fa fa-check-circle-o"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                <strong className="title">
                                {task && task.title}
                                </strong>
                                <span className="icon-rm" onClick={() => this.props.deleteTask(task.id)} >
                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/*
                    {isLoading && (
                    <div className="loader">
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                    </div>
                    )}
                    <div className="message-empty">
                        <h3>{empty}</h3>
                    </div>*/}
                </div>        
            )
        });
    }
}

const mapStateToProps = state => {
    return { 
        tasks: Object.values(state.tasks)
    };
};

export default connect(
    mapStateToProps,
    { fetchTasks, deleteTask }
) (TaskList);