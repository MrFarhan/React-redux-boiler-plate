import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emailAction, nameAction } from '../Redux/Actions'

export const Signup = () => {

    const [uName, setUname] = useState("")
    const [uEmail, setUemali] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, doConfirmPassword] = useState("")
    const [gender, setGender] = useState(false)
    const dispatch = useDispatch()

    const name = useSelector(state => state.name)
    // const email = useSelector(state => state.email)
    console.log(name, "name")
    let history = useHistory()
    const signin = () => {
        history.push("/")
    }

    const signup = () => {

        if (uName?.length < 3) {
            alert("username must be 3 charactors long")
        }
        else if (pass?.length < 5) {
            alert("password mush be greater then 5")
        }
        else if (pass !== confirmPass) {
            alert("password and confirm password doesn't match")
        }
        else if (!gender) {
            alert("please select gender")
        }
         else {
            dispatch(nameAction(uName))
            dispatch(emailAction(uEmail))
            history.push("/dashboard")
        }
    }


    const SelectGender = (e) => {
        console.log(e.target.value)
        setGender(e.target.value)
    }
    return (
        <div>
            <Form onSubmit={(e) => e.preventDefault()}>

                <Form.Group >
                    <Form.Label >
                        User Name
                 </Form.Label>
                    <Form.Control type="text" placeholder="User Name" onChange={(e) => { setUname(e.target.value) }} value={uName} required />
                </Form.Group>

                <Form.Group >
                    <Form.Label >
                        Email
                 </Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={(e) => { setUemali(e.target.value) }} value={uEmail} required />
                </Form.Group>

                <Form.Group >
                    <Form.Label >
                        Password
                </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPass(e.target.value) }} value={pass} required />
                </Form.Group>

                <Form.Group >
                    <Form.Label >
                        Confirm Password
                </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { doConfirmPassword(e.target.value) }} value={confirmPass} required />
                </Form.Group>


                <Form.Group className="radiogroup">
                    <Form.Label as="legend" className="radiogroupledger">
                        Gender
                    </Form.Label>
                    <Form.Check className="checkbox"
                        type="radio"
                        label="Male"
                        value="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={SelectGender}
                    />
                    <Form.Check className="checkbox"
                        type="radio"
                        label="Female"
                        value="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={SelectGender}
                    />
                    <Form.Check className="checkbox"
                        type="radio"
                        label="Rather not to say"
                        value="Rather not to say"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onClick={SelectGender}
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
        </div>
    )
}
