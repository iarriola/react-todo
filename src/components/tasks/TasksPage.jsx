import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../redux/actions/taskActions';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';

import { v4 as uuid_v4 } from "uuid";

class TasksPage extends React.Component {

    constructor() {
        super();

        this.mainInput = React.createRef();

    }

    state = {
        task: {}
    };

    onChangeInput = e => {
        this.setState({task: {...this.state.task, title: e.target.value}});
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.actions.createTask(this.state.task);
        this.state.task.title = "";
    }

    componentDidMount() {
        this.mainInput.current.focus();
    }

    renderAllTask() {
        return this.props.tasks.map(task => (
            <center><p key={uuid_v4()}>{task.title}</p></center>
        ));
    }

    render() {
        return (
            <div className="dashboard jumbotron">
                <header>
                    <h1>Tasks</h1>
                </header>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.mainInput} onChange={this.onChangeInput} value={this.state.task.title} type="text" className="todo-input" />
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </form>
                { this.renderAllTask() }
            </div>


        );
    }
}

TasksPage.propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
