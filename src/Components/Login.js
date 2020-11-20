import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "../App.css"
import { FiLogIn } from 'react-icons/fi';




export const Login = () => {
    const [uEmail, setUemali] = useState("")
    const [pass, setPass] = useState("")

    let history = useHistory()
    const Signin = () => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(uEmail.match(mailformat))) {
            alert("Incorrect email format") 
        } else {
            console.log("correct email")
            history.push("/dashboard")
        }
    }



    const Signup = () => {
        history.push("/signup")
    }



    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoFocus onChange={(e) => setUemali(e.target.value)} value={uEmail} />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass} />
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
