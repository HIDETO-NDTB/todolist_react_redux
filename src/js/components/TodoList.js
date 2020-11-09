import React from 'react';
import PropTypes, {arrayOf} from 'prop-types';
import Task from "./Task";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {todos, onUpdateText, onToggleDone, onDeleteTask} = this.props;
        let tasks = [];
        for(let i in todos) {
            tasks.push(<Task key={todos[i].id} {...todos[i]}
            onEnterUpdateText={(text) => onUpdateText(todos[i].id, text)}
            onClickToggleDone={() => onToggleDone(todos[i].id)}
            onClickDeleteTask={() => onDeleteTask(todos[i].id)} />);
        }

        return (
            <ul className="list js-todo_list">
                { tasks }
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isDone: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
    onUpdateText: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}

export default TodoList