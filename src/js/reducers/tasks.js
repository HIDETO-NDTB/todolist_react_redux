import _ from 'lodash';

const initialState = {
    todos:[{
        id: 'XXXX',
        text: 'sample todo1',
        isDone: false
    }],
    searchText: ''
}

export default function tasks(state = initialState, action) {

    switch (action.type) {
        case 'ADD':
            return {
                todos:[...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        isDone: false
                    }]
            };
        case 'DELETE':
            return Object.assign({}, state, {
                todos: _.reject(state.todos, {'id':action.id})
            });
        case 'UPDATE':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if(todo.id === action.id) {
                        return Object.assign({}, todo, {
                            text: action.text
                        })
                    }
                    return todo
                })
            });
        case 'TOGGLE_DONE':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if(todo.id === action.id) {
                        return Object.assign({}, todo, {
                            isDone: !todo.isDone
                        })
                    }
                    return todo
                })
            });
        case 'SEARCH':
            return Object.assign({}, state, {
                searchText: action.searchText
            });
        default:
            return state;
    }
}