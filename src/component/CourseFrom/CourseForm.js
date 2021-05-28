import React from 'react';
import './CourseForm.css';
const CourseForm = (props) => {
	return (
		<div className="form">
			<form onSubmit={props.handelSubmit}>
				<input
					type="text"
					placeholder="Type Your Course"
					onChange={props.updateCourse}
					value={props.inputVla}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};
export default CourseForm;
