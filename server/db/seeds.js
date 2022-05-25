use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John McNeill",
        email: "John@codeclan.com",
        checkedIn: false
    },
    {
        name: "Stuart Houston",
        email: "stuart@codeclan.com",
        checkedIn: false
    },
    {
        name: "Meera Shanawas",
        email: "meera@codeclan.com",
        checkedIn: false
    }
]);
