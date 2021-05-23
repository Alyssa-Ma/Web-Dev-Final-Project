import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './css/NewCampusFormView.css'
import axios from "axios";
import { ADD_CAMPUS } from "../../store/actions/actionTypes";

const NewCampusFormView = () => { 
  
    const [campusName, editCampusName] = useState("");
    const [campusAddress, editCampusAddress] = useState("");
    const [campusImageURL, editCampusImage] = useState("");
    const [campusDescription, editCampusDescription] = useState("");

    function campusNameInput (event) {
        editCampusName(event.target.value)
    }

    function campusAddressInput (event) {
        editCampusAddress(event.target.value)
    }

    function campusImageInput (event) {
        editCampusImage(event.target.value)
    }

    function campusDescriptionInput (event) {
        editCampusDescription(event.target.value)
    }

    const addCampus = async () => {
        
        if (campusName == "" || campusName == null) {
            alert("Please enter Campus Name");
            return 0;
        }

        if (campusAddress == "" || campusAddress == null) {
            alert("Please enter Campus Address");
            return 0;
        }

        await axios
            .post('/api/campuses', {
                name: campusName,
                description: campusDescription,
                imageUrl: campusImageURL,
                address: campusAddress

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
        <form>
            <h1 className="title">Add Campus</h1>
            <div className="fill">
                Campus Name: <input></input>
                Campus Address: <input></input>
                Campus Description: <input></input>
                Campus Image: <input></input>
            </div>
            <Link to={'/campuses'}>
                <Button variant="contained" color="primary" style={{marginTop: '20px'}}>
                    Add Campus
                </Button>
            </Link>
        </form>
    );
}

export default NewCampusFormView;