import { H2, SectionContainer, VSpacer } from "GlobalStyles"
import { useCartStore } from "store/store.cart"

export const Cart = () => {

    const { total, tickets } = useCartStore()

    return (
        <SectionContainer>
            <H2>Cart</H2>
            <VSpacer size={"2rem"} />
            
        </SectionContainer>
    )
}