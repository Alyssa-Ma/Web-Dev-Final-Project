import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './css/NewCampusFormView.css'

const NewCampusFormView = () => { 

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