function countingPrice(ticketQuantity) {
    const first100price = 100;
    const second100price = 90;
    const restPrice = 70;
    let totalPrice;
    if (ticketQuantity >= 200) {
        const restTicketPrice = restPrice * (ticketQuantity - 200);

        const second100TicketPrice = second100price * 100
        const first100TicketPrice = first100price * 100;
        totalPrice = restTicketPrice + second100TicketPrice + first100TicketPrice;
    }
    else if (ticketQuantity > 100) {
        const second100TicketPrice = second100price * (ticketQuantity - 100);

        const first100TicketPrice = second100price * 100
        totalPrice = second100TicketPrice + first100TicketPrice;
    }
    else
    totalPrice = first100price * ticketQuantity
    return totalPrice;

}
const ticket = 100;
const totalTicketPrice = countingPrice(ticket);
console.log(totalTicketPrice);