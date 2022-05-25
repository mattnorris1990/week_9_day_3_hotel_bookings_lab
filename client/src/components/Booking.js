import React from "react"
import { deleteBooking } from "../services/BookingServices"

const Booking = ({booking, removeBooking}) => {

    const handleClick = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        })
    }

    return (
        <>
            <h2>{booking.name}</h2>
            <p>{booking.email}</p>
            <button onClick={handleClick}>delete</button>
        </>
    )
}

export default Booking