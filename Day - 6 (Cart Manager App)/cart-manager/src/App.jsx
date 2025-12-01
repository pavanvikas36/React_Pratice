import CartHeader from "./features/cart/CartHeader"
import CartList  from "./features/cart/CartList"
import CartSummary  from "./features/cart/CartSummary"

export default function App() {
    return (
        <div>
            <CartHeader />
            <CartList />
            <CartSummary />
        </div>
    )
}