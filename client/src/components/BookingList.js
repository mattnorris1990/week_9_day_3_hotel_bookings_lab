import React from "react"
import Booking from "./Booking"

const BookingList = ({bookings, removeBooking}) => {

    const bookingsNodes = bookings.map((booking, index) => {
        return <Booking booking = {booking} key = {index} removeBooking = {removeBooking}/>
    })

    return (

        <>
            {bookingsNodes}
        </>
    )
}

export default BookingList