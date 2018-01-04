import React from 'react';

export default class Input extends React.Component {
	render() {
		return(
			<form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
				<input type="text" ref="taskInput" placeholder="What do I need to do?"/>
				<button>Create</button>
			</form>
		);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.refs.taskInput.value);
		this.refs.taskInput.value = '';
	}
}