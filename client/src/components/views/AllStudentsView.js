import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/AllStudentView.css";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div>There are no students.</div>;
    }
    return (
        <div className="container">
            <div className="row">
                {props.allStudents.map((student) => {

                    console.log(props.allStudents);
                    return (

                        <div key={student.id} className="col text-center">
                            <Link to={`/student/${student.id}`}>
                                <h2>{student.firstname} {student.lastname}</h2>
                            </Link>
                            <img src={student.imageUrl} alt='student-pic' className="student-pic"/>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};


AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;