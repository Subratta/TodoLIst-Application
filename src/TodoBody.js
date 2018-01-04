import React from 'react';

export default class TodoBody extends React.Component {
	constructor() {
		super();
		this.state = {
			isEdit: false
		};
	}

	actionSection() {
		if (this.state.isEdit) {
			return (
				<td>
					<button onClick={ this.saveHandler }>Save</button>
					<button onClick={ this.cancalHandler }>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={ this.editHandler }>Edit</button>
				<button onClick={ this.deleteHandler }>Delete</button>
			</td>
		);
	}

	taskSection() {
		if (this.state.isEdit) {
			return (
				<td>
					<form onSubmit={ this.saveHandler }>
						<input type="text" ref="editInput" defaultValue={this.props.task}/>
					</form>
				</td>
			);
		}

		return <td>{this.props.task}</td>;
	}

	changeState = () => {
		let isEdit = !this.state.isEdit;
		this.setState({ isEdit });
	}

	editHandler = () => {
		this.changeState();
	}

	cancalHandler = () => {
		this.changeState();
	}

	saveHandler = (e) => {
		e.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.updateTask(oldTask, newTask);
		this.changeState();
	}

	deleteHandler = () => {
		const task = this.props.task;
		this.props.removeTask(task);
	}

	render() {
		return(
			<tr>
				{this.taskSection()}
				{this.actionSection()}
			</tr>
		);
	}
}