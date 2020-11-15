import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "../App.css"
import { FiLogIn } from 'react-icons/fi';




export const Login = () => {
    let history = useHistory()
    const Signin = () => {
        history.push("/dashboard")
    }



    const Signup = () => {
        history.push("/signup")
    }



    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoFocus />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Signin}>
                <FiLogIn /> Login
                 </Button>

            <Button variant="link" onClick={Signup}>Don't have an account</Button>

        </Form>
    )
}
