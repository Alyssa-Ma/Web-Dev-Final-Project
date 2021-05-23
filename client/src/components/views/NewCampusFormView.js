import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import axios from "axios";

const NewCampusFormView = () => { 

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>New Campus Form</h1>
            <form style={{marginTop: '20px'}}>
                Campus Name: <input></input>
                Campus Address: <input></input>
                Campus Description: <input></input>
                Campus Image: <input></input>
                <Link to={'/campuses'}>
                    <Button variant="contained" color="primary" style={{marginTop: '20px'}}>
                        Add Campus
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default NewCampusFormView;