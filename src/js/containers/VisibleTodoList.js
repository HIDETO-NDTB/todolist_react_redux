import { connect } from 'react-redux';
import { updateTask, deleteTask, toggleDone } from "../actions";
import TodoList from "../components/TodoList";

const filterTodo = function (elm) {
    const regexp = new RegExp('^' + this.searchText, 'i');
    return (elm.text.match(regexp))
};

const mapStateToProps = state => {
    return {
        todos: (state.tasks.searchText) ? state.tasks.todos.filter(filterTodo, state.tasks) : state.tasks.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleDone: id => {
            dispatch(toggleDone(id));
        },
        onDeleteTask: id => {
            dispatch(deleteTask(id));
        },
        onUpdateText: (id, text) => {
            dispatch(updateTask(id, text));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)