export function addTask(id, text) {
    return {
        type: 'ADD',
        id: id,
        text: text
    };
}
export function toggleDone(id) {
    return {
        type: 'TOGGLE_DONE',
        id: id
    };
}
export function deleteTask(id) {
    return {
        type: 'DELETE',
        id: id
    };
}
export function updateTask(id, text) {
    return {
        type: 'UPDATE',
        id: id,
        text: text
    };
}
export function searchTask(text) {
    return {
        type: 'SEARCH',
        searchText: text
    };
}