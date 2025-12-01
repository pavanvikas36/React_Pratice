import {useSelector} from "react-redux"

export default function CartHeader() {
    const total = useSelector((state) => state.cart.totalAmount)

    return (
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
            <h1>Shopping Cart</h1>
            <p>Total: {total}</p>
        </header>
    )
}