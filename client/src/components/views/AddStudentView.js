import React, { Component } from 'react';
import axios from 'axios';

class AddStudentView extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        };
        this.fnInput = this.fnInput.bind(this);
        this.lnInput = this.lnInput.bind(this);
        this.emailInput = this.emailInput.bind(this);
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
    async submit() {
        axios
        .post('./api/students', {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email
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
                <h1>Add New Student</h1>
                First Name: <input onChange={this.fnInput}></input>
                Last Name: <input onChange={this.lnInput}></input>
                Email: <input onChange={this.emailInput}></input>
                <button onClick={()=>this.submit()} variant="contained" color="primary" style={{marginTop: '20px'}}>
                    Add Student
                </button>
            </form>
        );
    }
}

export default AddStudentView;