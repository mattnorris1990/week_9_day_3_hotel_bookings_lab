import React, {useState} from "react"
import { deleteBooking, putBooking } from "../services/BookingServices"
import styled from "styled-components"

const BookingBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
gap: 2vh;
background-color: #d9a67d;
padding: 2vw;
min-width: 18vw;
border-radius: 30px;
`

const Booking = ({booking, removeBooking, updateCheckIn}) => {

    const [checkedInStatus, setCheckedInStatus] = useState(booking.checkedIn)

    const handleClick = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        })
    }

    const handleChange = () => {
        setCheckedInStatus(!checkedInStatus)
        updateCheckIn(booking)
        
    }

    return (
        <>
            <BookingBlock>
                <h2>{booking.name}</h2>
                <p>contact: {booking.email}</p>
                <label htmlFor="checked">Checked In
                <input type="checkbox" name="checked" checked = {checkedInStatus} onChange={handleChange}/>
                </label>
                <button onClick={handleClick}>delete</button>

            </BookingBlock>
                
        </>
    )
}

export default Booking