import { ICartStore, ITicket, TicketCategory } from "types"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { db } from "database/firebase.configSetter"
import { collection, addDoc } from "firebase/firestore";
import { products } from "components/tickets/products";

export const useCartStore = create<ICartStore>()(
    devtools(
        persist((set) => ({
            total: 0,
            tickets: products.data,
            add: (data, userId) => {
                //Save cart to firebase
                
                set((state) => ({
                    total: state.total + data.price,
                    tickets: [...state.tickets, data as ITicket]
                }));
            },
            remove: (data, userId) => set((state) => ({
                total: state.total - data.price,
                tickets: state.tickets.filter(function (t) { return t.category !== data.category })
            })),
            dropCart: () => {
                set(() => ({ total: 0, tickets: [] }))
            },

        }),
            { name: "cart" }),
    )
)
