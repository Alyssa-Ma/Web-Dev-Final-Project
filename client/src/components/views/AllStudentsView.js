import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./css/AllStudentView.css";
import Button from '@material-ui/core/Button';
import axios from "axios";

const AllStudentsView = (props) => {
    function remove(studentID) {
        axios
        .delete(`/api/students/${studentID}`)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
        window.location.replace(`/students`);
    }

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
                            <img src={student.imageUrl} alt='student-pic' className="student-pic"/><br/>
                            <Button onClick={() => remove(student.id)} variant="contained" color="primary" style={{backgroundColor:"red"}}>DELETE</Button>
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