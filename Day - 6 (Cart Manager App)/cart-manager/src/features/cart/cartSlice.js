import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: [
        {id: 1, name: "Laptop", quantity: 1, price: 1200},
        { id: 2, name: "Headphones", quantity: 2, price: 200 },
    ],
    totalAmount: 1600
}

function calculateTotal(items) {
    return items.reducer((sum, item) => sum + item.price * item.quantity, 0)
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.playload
            const exists = state.items.find((i) => i.id === item.id)

            if(exists) {
                exists.quantity += 1
            }else{
                state.items.push({...item, quantity: 1})
            }

            state.totalAmount = calculateTotal(state.items)
        },

        removeItem(state, action) {
            state.items = state.items.filter((i) => i.id !== action.payload)
            state.totalAmount = calculateTotal(state.items)
        },

        increaseQty(state, action) {
            const item = state.items.find((i) => i.id === action.playload)
            if(item) item.quantity + 1
            state.totalAmount = calculateTotal(state.items)
        },

        decreaseQty(state, action) {
            const item = state.items.find((i) => i.id === action.playload)
            if(item) {
                item.quantity -= 1 
                if(item.quantity <= 0) {
                    state.items = state.items.filter((i) => i.id !== action.playload)
                }
            }
            state.totalAmount = calculateTotal(state.items)
        },
        
        clearCart(state) {
            state.items = []
            state.totalAmount = 0
        }
    }
})

export const {addItem, removeItem, increaseQty, decreaseQty, clearCart} = cartSlice.actions
export default cartSlice.reducer