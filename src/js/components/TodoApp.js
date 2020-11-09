import React from 'react';
import TodoCreator from './TodoCreator';
import Search from './Search';
import VisibleTodo from '../containers/VisibleTodoList';

export default class TodoApp extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                <TodoCreator />

                <Search />

                <VisibleTodo />
            </div>

        );
    }
}