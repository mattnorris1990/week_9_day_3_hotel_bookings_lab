import React, {useState} from "react"
import {postBooking} from "../services/BookingServices"

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
            <form onSubmit = {onSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={onNameChange}/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={onEmailChange} required/>

                <input type = "submit" value="Save" id="save"/>
            </form>
        </>
    )
}

export default BookingForm