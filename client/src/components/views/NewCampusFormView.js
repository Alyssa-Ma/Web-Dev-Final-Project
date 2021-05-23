import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {useState} from "react";
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
        <div>
            <h1 style={{textAlign: 'center'}}>New Campus Form</h1>
            <form style={{marginTop: '20px'}}>
                Campus Name: <input onChange={campusNameInput}></input> <br/><br/>
                Campus Address: <input onChange={campusAddressInput}></input> <br/><br/>
                Campus ImageURL: <input onChange={campusImageInput}></input> <br/><br/>
                Campus description: <input onChange={campusDescriptionInput}></input>
            </form>

            <button onClick={addCampus}> Add </button>

        </div>
    );
};

export default NewCampusFormView;