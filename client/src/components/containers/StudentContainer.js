import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id)
  }

  render() {
    return (
      <StudentView
        student={this.props.student}
      />
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};
export default connect(mapState, mapDispatch)(StudentContainer);