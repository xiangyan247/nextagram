import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link } from "react-router-dom";
import LogIn from '../components/LogIn';
import axios from 'axios';



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            username: '',
            email: '',
            password: ''
        };
    }



    handleSubmit = event => {
        const { username, email, password } = this.state
        event.preventDefault()
        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            data: {
                username: username,
                email: email,
                password: password,
            }
        })
            .then(response => {
                console.log(response)
            })

    }

    handleInput = event => {
        // console.log("type : " + event.target.name + " value : " + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {

        const closeBtn = <button className="close" onClick={this.props.toggleSignUp}>&times;</button>;

        return (
            <div >

                <Button className="sign-up" color="white" onClick={this.props.toggleSignUp}>Sign Up</Button>

                <Modal isOpen={this.props.isOpen} toggle={this.props.toggleSignUp} className={this.props.className}>

                    <ModalHeader toggle={this.props.toggleSignUp} close={closeBtn}>Sign Up</ModalHeader>

                    <Form onSubmit={this.handleSubmit} onClick={this.props.toggleSignUp}>

                        <ModalBody>

                            <FormGroup>
                                <Label for="exampleUsername">Username</Label>
                                <Input type="username" onChange={this.handleInput} name="username" id="exampleUsername" placeholder="" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" onChange={this.handleInput} name="email" id="exampleEmail" placeholder="" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" onChange={this.handleInput} name="password" id="examplePassword" placeholder="" />
                            </FormGroup>

                            <FormText color="muted">
                                Already a member? <span style={styles.loginButton} onClick={this.props.switchModal}>Log in </span> here.
                        </FormText>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" >Sign up</Button>{''}
                            <Button color="secondary" onClick={this.props.toggleSignUp}>Cancel</Button>
                        </ModalFooter>

                    </Form>

                </Modal>

            </div>
        );
    }

}


const styles = {
    loginButton: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'darkblue'
    }
}

export default SignUp;