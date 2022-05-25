import React, {useState, useEffect} from "react"
import BookingList from "../components/BookingList"
import BookingForm from "../components/BookingForm"
import {getBookings, putBooking} from "../services/BookingServices"

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings()
        .then((allBookings) => {
            setBookings(allBookings);
        })
    }, [])



    const addBooking = (booking) => {
        const temp = bookings.map(s => s)
        temp.push(booking)
        setBookings(temp)
    }

    const removeBooking = (id) => {
        const temp = bookings.map(s => s)
        const indexToDel = temp.map(s => s._id).indexOf(id);
        temp.splice(indexToDel, 1)
        setBookings(temp)
    }


    const updateCheckIn = (booking) => {
        const temp = [... bookings];
        const indexOfBookingToBeUpdated = temp.indexOf(booking)
        
        const bookingToBeUpdated = temp[indexOfBookingToBeUpdated]
        
        bookingToBeUpdated.checkedIn = !bookingToBeUpdated.checkedIn

        setBookings(temp)

        putBooking(temp[indexOfBookingToBeUpdated])
    }

    return (

        <>
            <h2>This is the bookings container</h2>
            <BookingForm addBooking = {addBooking}/>
            <BookingList bookings = {bookings} removeBooking = {removeBooking} updateCheckIn = {updateCheckIn}/> 
        </>
    )
}

export default BookingsContainer