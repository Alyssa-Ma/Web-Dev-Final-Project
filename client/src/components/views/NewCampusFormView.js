import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {useState} from "react";
import axios from "axios";
import { ADD_CAMPUS } from "../../store/actions/actionTypes";

const NewCampusFormView = () => {

    const [campusName, editCampusName] = useState("");
    const [campusAddress, editCampusAddress] = useState('');

    function onType (event) {
        editCampusName(event.target.value)
    }

    const addCampus = async () => {
        
        if (campusName == "" || campusName == null) {
            alert("Please enter Campus Name");
            return 0;
        }

        await axios
            .post('/api/campuses', {
                name: campusName,

            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
            //window.location.replace("/campuses");
    }
        

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>New Campus Form</h1>
            <form style={{marginTop: '20px'}}>
                Campus Name: <input onChange={onType}></input><br/><br/>
                Campus Address: <input></input>
            </form>

            <button onClick={addCampus}> button </button>

        </div>
    );
};

export default NewCampusFormView;