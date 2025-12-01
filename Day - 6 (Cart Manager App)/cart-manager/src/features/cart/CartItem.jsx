import {useDispatch} from "react-redux"
import {increaseQty, decreaseQty, removeItem} from "./cartSlice"

export default function CartItem({item}) {
    const dispatch = useDispatch()

    return (
        <div style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </div>
            <p>Total: ${item.quantity * item.price}</p>
        </div>
    )
}