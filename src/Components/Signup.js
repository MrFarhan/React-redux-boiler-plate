import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const Signup = () => {

    let history = useHistory()
    const signin = () => {
        history.push("/")
    }

    const signup = () => {
        history.push("/dashboard")
    }

    return (
        <div>
            <Form>
                <Form.Group >
                    <Form.Label >
                        Email
                 </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Form.Group>
                    <Form.Label as="legend" column sm={2}>
                        Gender
                         </Form.Label>
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        type="radio"
                        label="Rather not to say"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Form.Group>

                <Form.Group controlId="formHorizontalCheck">
                    <Form.Check label="Remember me" />
                </Form.Group>

                <Form.Group>
                    <Button type="submit" onClick={signup}>Sign Up</Button>
                </Form.Group>
            </Form>
            <Button variant="link" onClick={signin}>Already have an account</Button>
            <i class="fas fa-sign-in-alt"></i>
        </div>
    )
}
