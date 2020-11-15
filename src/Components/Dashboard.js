import React from 'react'
import { useHistory } from 'react-router-dom'
import {CgLogOut} from "react-icons/cg"
import { Button } from 'react-bootstrap'

export const Dashboard = () => {
    let history = useHistory()
    const logout = () => {
        history.push("/")
    }
    return (
        <div className="dashboard">
            Dashboard

            <Button variant="outline-dark" onClick={logout} className="logout"><CgLogOut />Logout</Button>
        </div>
    )
}
