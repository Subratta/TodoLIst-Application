import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import Input from './Input';
import './app.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	renderTodoBody() {
		return this.state.todos.map(
			(t, i) => <TodoBody 
				{...t} key={i}
				updateTask={ this.updateTask }
				removeTask={ this.removeTask }
			/>
		);
	}

	addTask = (task) => {
		let todos = this.state.todos;
		todos.push({
			task
		});

		this.setState({ todos });
	}

	updateTask = (oldTask, newTask) => {
		let t = this.state.todos;
		let foundTodo = t.find((t) => t.task === oldTask);
		foundTodo.task = newTask;
		
		this.setState({ todos: this.state.todos });
	}

	removeTask = (task) => {
		let t = this.state.todos;
		t.splice(t => t.task === task, 1);

		this.setState({ todos: this.state.todos });
	}

	render() {
		return(
			<div>
				<h2>Welocme To React Todo App!</h2>
				<div className="inputTask">
					<Input addTask={this.addTask} />
				</div>
				<table>
					<thead>
						<TodoHeader />
					</thead>
					<tbody>
						{this.renderTodoBody()}
					</tbody>
				</table>
			</div>
		);
	}
}