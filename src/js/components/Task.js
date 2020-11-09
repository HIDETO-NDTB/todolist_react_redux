import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            editMode: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleKeyUpCloseEdit = this.handleKeyUpCloseEdit.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    handleShowEdit() {
        this.setState({
            editMode:true
        });
    }
    handleKeyUpCloseEdit(e) {
        if(e.keyCode === 13 && e.shiftKey === true) {
            this.setState({
                text: e.currentTarget.value,
                editMode: false
            });
            this.props.onEnterUpdateText(e.currentTarget.value);
        }
    }

    render() {
        const onClickToggleDone = this.props.onClickToggleDone;
        const onClickDeleteTask = this.props.onClickDeleteTask;
        // const {onClickToggleDone, onClickDeleteTask} = this.props;
        const classNameLi = ClassNames({
            'list__item': true,
            'list__item--done': this.props.isDone
        });
        const classNameIcon = ClassNames({
            'fa': true,
            'fa-circle-thin': !this.props.isDone,
            'fa-check-circle': this.props.isDone,
            'icon-check': true
        });
        const input = (this.state.editMode) ?
            <input type="text" className="editText" value={this.state.text} onChange={this.handleChange}
            onKeyUp={this.handleKeyUpCloseEdit} /> :
            <span onClick={this.handleShowEdit}>{this.state.text}</span>
        return (
            <li className={classNameLi}>
                <i className={classNameIcon} onClick={onClickToggleDone} aria-hidden="true"/>
                { input }
                <i className="fa fa-trash icon-trash" aria-hidden="true" onClick={onClickDeleteTask} />
            </li>
        );
    }
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    onUpdateText: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
};

export default Task