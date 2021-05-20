import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;

    return (
        <div>
            <h1>{student.firstname} {student.lastname}</h1>
            <p></p>
        </div>
    )
}

export default StudentView;