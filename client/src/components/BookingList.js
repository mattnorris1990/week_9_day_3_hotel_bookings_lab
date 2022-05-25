import React from "react"
import Booking from "./Booking"
import styled from 'styled-components'

const BookList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4vh;
    justify-content: center;
    margin: 10vw;
    margin-top: 5vh;
`


const BookingList = ({bookings, removeBooking, updateCheckIn}) => {

    const bookingsNodes = bookings.map((booking, index) => {
        return (
            <>
                <Booking booking = {booking} key = {index} removeBooking = {removeBooking} updateCheckIn = {updateCheckIn}/>
        </>
        )  
    })

    return (

        <>
        <BookList>
            {bookingsNodes}
        </BookList>    
        </>
    )
}

export default BookingList