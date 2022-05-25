const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const postBooking = (payload) => {
    if (payload.name && payload.email) {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
} else {
    console.log("name and email address required")
}
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const putBooking = (payload) => {
    return fetch(baseURL + payload._id, {
        method: 'PUT',
        body: JSON.stringify(
            {
                name: payload.name,
                email: payload.email,
                checkedIn: payload.checkedIn
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())

    }