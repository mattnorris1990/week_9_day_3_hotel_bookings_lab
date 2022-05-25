import React from "react"
import Booking from "./Booking"

const BookingList = ({bookings, removeBooking, updateCheckIn}) => {

    const bookingsNodes = bookings.map((booking, index) => {
        return <Booking booking = {booking} key = {index} removeBooking = {removeBooking} updateCheckIn = {updateCheckIn}/>
    })

    return (

        <>
            {bookingsNodes}
        </>
    )
}

export default BookingList