import React from 'react';

export default class TodoHeader extends React.Component {
	render() {
		return(
			<tr>
				<th>Task</th>
				<th>Actions</th>
			</tr>
		);
	}
}