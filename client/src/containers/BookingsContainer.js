import React, {useState, useEffect} from "react"
import BookingList from "../components/BookingList"
import BookingForm from "../components/BookingForm"
import {getBookings} from "../services/BookingServices"

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

    return (

        <>
            <h2>This is the bookings container</h2>
            <BookingForm addBooking = {addBooking}/>
            <BookingList bookings = {bookings} removeBooking = {removeBooking}/> 
        </>
    )
}

export default BookingsContainer