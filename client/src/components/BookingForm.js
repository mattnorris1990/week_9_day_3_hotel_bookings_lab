import React, {useState} from "react"
import {postBooking} from "../services/BookingServices"
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
max-width: 30%;
margin: auto;
gap: 2vh;
font-family: 'Quicksand', sans-serif;
font-weight: bold;
`

const BookingForm = ({addBooking}) => {

    const [enteredName, setEnteredName] = useState("")
    const [enteredEmail, setEnteredEmail] = useState("")

    const onNameChange = (event) => {
        setEnteredName(event.target.value)
    }

    const onEmailChange = (event) => {
        setEnteredEmail(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        
        const newBooking = {
            name: enteredName,
            email: enteredEmail,
            checkedIn: false
        }
        postBooking(newBooking)
        .then((data) => addBooking(data))
        setEnteredName("")
        setEnteredEmail("")
        event.target.reset()
    }

    return (
        <>
            
            <Form onSubmit = {onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={onNameChange}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={onEmailChange} required/>

                <input type = "submit" value="Save" id="save"/>
            </Form>
        </>
    )
}

export default BookingForm