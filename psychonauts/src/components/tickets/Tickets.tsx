import { SectionContainer, H2, VSpacer } from "GlobalStyles"
import { BuyButton, CardWrapper, Divider, PriceContainer, PriceTag, Category } from "./styled.tickets"
import { ITicket, TicketCategory } from "types"
import { useCartStore } from "store/store.cart"
import { useAuthStore } from "store/store.auth"

export const Tickets = () => {

    var tickets = [
        {
            category: "Festival Ticket 2023",
            timeframe: "Full Weekend",
            price: 79,
            categoryType: TicketCategory.WEEKEND
        },
        {
            category: "Camping",
            timeframe: "Full Weekend",
            price: 20,
            categoryType: TicketCategory.CAMPING
        },
        {
            category: "Day Ticket",
            timeframe: "Saturday",
            price: 42,
            categoryType: TicketCategory.SATURDAY
        },
        {
            category: "Day Ticket",
            timeframe: "Sunday",
            price: 42,
            categoryType: TicketCategory.SUNDAY
        },
    ]

    const { currentUser } = useAuthStore()
    const { add } = useCartStore()

    const handleBuyClick = (i: any) => {

        var data: ITicket = {
            category: i.categoryType,
            amount: 1,
            price: i.price
        }

        add(data, currentUser?.uid)
    }

    return (
        <SectionContainer>
            <H2>Tickets</H2>
            <VSpacer size={"2rem"} />
            {tickets.map((i) => {
                return (
                    <CardWrapper key={i.category + Math.random()}>
                        <Category>
                            <h2>{i.category}</h2>
                            <p>{i.timeframe}</p>
                        </Category>
                        <Divider />
                        <PriceContainer>
                            <PriceTag>{i.price}€</PriceTag>
                        </PriceContainer>
                        <BuyButton onClick={() => handleBuyClick(i)}>To Cart</BuyButton>
                    </CardWrapper>
                )
            })}
            {/* 
            <CardWrapper $debug>
                <Category>
                    <h2>Camping</h2>
                    <p>Full Weekend</p>
                </Category>
                <Divider />
                <p>20€ - <br />excl. 10€ Garbage Deposit</p>
                <BuyButton>Buy</BuyButton>
            </CardWrapper>

            <CardWrapper $debug>
                <Category>
                    <h2>Day Ticket</h2>
                    <p>Saturday</p>
                </Category>
                <Divider />
                <p>80€</p>
                <BuyButton>Buy</BuyButton>
            </CardWrapper>

            <CardWrapper $debug>
                <Category>
                    <h2>Day Ticket</h2>
                    <p>Sunday</p>
                </Category>
                <Divider />
                <p>80€</p>
                <BuyButton>Buy</BuyButton>
            </CardWrapper> */}

        </SectionContainer>
    )
}