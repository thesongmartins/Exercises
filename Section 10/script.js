'use strict';
//Default Parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum, numPassengers, price
    };
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
// How passing arguments works: Values vs references
const flight = 'LH123';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}
const checkIn = (flightNum, passenger) => {
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Check In')
    } else {
        alert("Wrong Password!")
    }
}
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 100000000000)
}
newPassport(jonas);
checkIn(flight, jonas);

// First-Class Vs Higher order functions
