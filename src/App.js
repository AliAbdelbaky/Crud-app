import React, { Component } from 'react';
import './App.css';
import CourseForm from './component/CourseFrom/CourseForm';
import CourseList from './component/CourseList/CourseList';
class App extends Component {
	state = {
		courses: [ { name: 'Html' }, { name: 'Css' }, { name: 'Js' } ],
		current: ''
	};
	//- UpdateCourse
	UpdateCourse = (e) => {
		this.setState({ current: e.target.value });
	};
	//- HandelSubmit
	HandelSubmit = (e) => {
		e.preventDefault();
		let current = this.state.current;
		let coursesList = this.state.courses;
		if (current === '') {
			return false;
		} else {
			coursesList.push({ name: current });
			this.setState({
				courses: coursesList,
				current: ''
			});
		}
	};
	//- Delete Function
	handelDelete = (index) => {
		let courses = this.state.courses;
		courses.splice(index, 1);
		this.setState({ courses });
	};
	//- editCourse Func
	editeCourse = (index, val) => {
		let courses = this.state.courses;
		let course = courses[index];
		course['name'] = val;
		this.setState({ courses });
	};
	render() {
		const { courses } = this.state;
		const coursesList = courses.map((Course, i) => {
			return (
				<CourseList
					details={Course}
					key={i}
					index={i}
					handellDelete={this.handelDelete}
					editCourse={this.editeCourse}
				/>
			);
		});
		return (
			<section className="App">
				<h2>Add Course</h2>
				<CourseForm
					updateCourse={this.UpdateCourse}
					handelSubmit={this.HandelSubmit}
					inputVla={this.state.current}
				/>
				{this.state.courses.length === 0 ? (
					<div className="noItem">there is no item to show!</div>
				) : (
					<ul className="appList">{coursesList}</ul>
				)}
			</section>
		);
	}
}

export default App;
