import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;

    return (
        <div>
            <h1>{student.firstname} {student.lastname}</h1>
            <img src={student.imageUrl} alt='student-pic' />
            <p>{student.campusname}</p>
            <p>{student.email}</p>
            <p>{student.gpa}</p>
        </div>
    )
}

export default StudentView;