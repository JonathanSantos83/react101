import React from 'react';
import { connect } from 'react-redux';

import { createTask } from '../actions';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    handleTitleChange = event => {
        this.setState({ title: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        /*if (this.state.title !== '') {
            this.props.createTask(this.state.title);
            this.setState({ title: "" });
        }*/
        if (this.state.title !== '') {
            const taskToSave = {
                "task": {
                  "title": this.state.title,
                  "status":"PENDING"
                }
            }  
            this.props.createTask(taskToSave);

            /*const taskToSave = {
                task: {
                  title: this.state.title,
                  status: "PENDING"
                }
            }  
            this.props.createTask( JSON.parse(taskToSave));*/


            this.setState({ title: "" });
        }
        
    }

    render() {
        return (
            <div className="row">
                <div className="form-group">
                    <label htmlFor="task_input">Title: </label>
                    <input  className="form-control" 
                            type="text" 
                            name="title" 
                            onChange={this.handleTitleChange}
                            value={this.state.title}
                            />
                    <div className="submitter">
                        <button className="btn btn-submit" onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { createTask })(TaskInput);


