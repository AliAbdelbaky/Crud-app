import React, { Component, Fragment } from 'react';
import './CourseList.css';
class CourseList extends Component {
	state = {
		isEdit: false
	};
	//- renderCourse Item
	renderCourse = () => {
		return (
			<li>
				<span>{this.props.details.name}</span>
				<button onClick={() => this.props.handellDelete(this.props.index)}>Delete</button>
				<button onClick={() => this.toggleState()}>Edit</button>
			</li>
		);
	};
	//------
	handellSubmit = (e) => {
		e.preventDefault();
		this.props.editCourse(this.props.index, this.input.value);
		this.toggleState();
	};
	//- render Update Form
	renderUpdateForm = () => {
		return (
			<form onSubmit={this.handellSubmit}>
				<input
					type="text"
					defaultValue={this.props.details.name}
					ref={(v) => {
						this.input = v;
					}}
				/>
				<button>Update Course</button>
			</form>
		);
	};
	//- Toggle State
	toggleState = () => {
		let { isEdit } = this.state;
		this.setState({ isEdit: !isEdit });
	};
	render() {
		return <Fragment>{this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()}</Fragment>;
	}
}
export default CourseList;
