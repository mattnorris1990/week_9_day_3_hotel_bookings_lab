import React, {useState} from "react"
import { deleteBooking, putBooking } from "../services/BookingServices"

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
            <h2>{booking.name}</h2>
            <p>{booking.email}</p>
            <button onClick={handleClick}>delete</button>
            
            <label htmlFor="checked">Yes</label>
            <input type="checkbox" name="checked" checked = {checkedInStatus} onChange={handleChange}/>
        
        </>
    )
}

export default Booking