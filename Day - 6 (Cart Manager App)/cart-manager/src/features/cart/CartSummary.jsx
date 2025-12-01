import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

export default function CartSummart() {
    const total = useSelector((state) => state.cart.totalAmount)
    const dispatch = useDispatch()

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Total Amount: ${total}</h2>
            <button onClick={() => dispatch(clearCart())}>CLear Cart</button>
            <button style={{ marginLeft: "10px" }}>CHeckout</button>
        </div>
    )
}