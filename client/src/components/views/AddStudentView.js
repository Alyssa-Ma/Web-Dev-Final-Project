import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/AddStudentView.css';

class AddStudentView extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: ""
        };
        this.fnInput = this.fnInput.bind(this);
        this.lnInput = this.lnInput.bind(this);
        this.emailInput = this.emailInput.bind(this);
        this.gpaInput = this.gpaInput.bind(this);
    }

    fnInput(event) {
        this.setState({firstName: event.target.value});
    }

    lnInput(event) {
        this.setState({lastName: event.target.value});
    }

    emailInput(event) {
        this.setState({email: event.target.value});
    }

    gpaInput(event) {
        this.setState({gpa: event.target.value});
    }

    async submit() {
        axios
        .post('./api/students', {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            gpa: this.state.gpa
        })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        return(
            <form>
                <h1 className="title">Add New Student</h1>
                <div className="fill">
                    <label for="fn">First Name:</label> <input onChange={this.fnInput} id="fn"></input> <br></br>
                    <label for="ln">Last Name:</label> <input onChange={this.lnInput} id="ln"></input> <br></br>
                    <label for="email">Email:</label> <input onChange={this.emailInput} id="email"></input> <br></br>
                    <label for="gpa">GPA:</label> <input onChange={this.gpaInput} id="gpa"></input>
                </div>
                <Link to={'/students'}>
                    <Button onClick={()=>this.submit()} variant="contained" color="primary" style={{marginTop: '20px'}}>
                        Add Student
                    </Button>
                </Link>
            </form>
        );
    }
}

export default AddStudentView;