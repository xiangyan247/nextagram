import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link } from "react-router-dom"
import axios from 'axios';



class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: ''
        };
    }



    handleLogin = event => {
        const { email, password } = this.state
        event.preventDefault()
        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
                email: email,
                password: password
            }
        })
            .then(response => {
                console.log(response)
                console.log("hello")
                localStorage.setItem('jwt', 'response.data.auth_token')
                sessionStorage.setItem('clickCount', 10)

            })
            .catch(error => {
                console.log(error)

            })

    }

    handleInput = event => {
        // console.log("type : " + event.target.name + " value : " + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        const closeBtn = <button className="close" onClick={this.props.toggleLogin}>&times;</button>;

        return (
            <div >
                <Button className="login" color="primary" onClick={this.props.toggleLogin}>Login</Button>
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggleLogin} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleLogin} close={closeBtn}>Login</ModalHeader>

                    <Form onSubmit={this.handleLogin} onClick={this.props.toggleLogin}>

                        <ModalBody>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" onChange={this.handleInput} name="email" id="exampleEmail" placeholder="" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" onChange={this.handleInput} name="password" id="examplePassword" placeholder="" />
                            </FormGroup>

                            <FormText color="muted">
                                New member? <span style={styles.signUpButton} onClick={this.props.switchModal}>Sign up </span> here.
                        </FormText>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" >Login</Button>{' '}
                            <Button color="secondary" onClick={this.props.toggleLogin}>Cancel</Button>
                        </ModalFooter>

                    </Form>
                </Modal>
            </div>
        );
    }
}

const styles = {
    signUpButton: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'darkblue'
    }
}

export default LogIn;