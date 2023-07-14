import { ITicket, TicketCategory } from "types";

const weekend = {
  category: TicketCategory.WEEKEND,
  price: 79,
  amount: 0,
};
const camping = {
  category: TicketCategory.CAMPING,
  price: 20,
  amount: 0,
};
const saturday = {
  category: TicketCategory.SATURDAY,
  price: 42,
  amount: 0,
};
const sunday = {
  category: TicketCategory.SUNDAY,
  price: 42,
  amount: 0,
};

var products = { data: [weekend, camping, saturday, sunday] };

export { products };
