import React, { Component } from 'react';
import CourseListRow from './courseListRow.js';


const CourseList = ({ courses }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Ttile</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => 
                    <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    );
};

export default CourseList;