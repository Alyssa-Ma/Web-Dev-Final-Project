import React, { Component } from "react";
import NewCampusFormView from '../views/NewCampusFormView';
import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";

// const NewCampusFormContainer = () => {
//     return (
//         <NewCampusFormView />
//     );
// };

class NewCampusFormContainer extends Component {
    render() {
        return(
            <NewCampusFormView />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
};
  
// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        addCampus: () => dispatch(addCampusThunk()),
    };
};

export default connect(mapState, mapDispatch)(NewCampusFormContainer);