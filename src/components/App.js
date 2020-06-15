import React from 'react';

import "../App.css";
import TaskInput from './TaskInput';
import TaskList from './TaskList';
//import TaskItem from './TaskItem';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="row">
                        <h3 className="task-page-title">{"Tasks:"}</h3>
                    </div>
                    <TaskInput />
                    <TaskList />
                </div>
            </header>
        </div>
    );
};

export default App;