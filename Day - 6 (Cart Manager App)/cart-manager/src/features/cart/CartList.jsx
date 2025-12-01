import {useSelector} from "react-redux"
import CartItem from "./CartItem"

export default function CartList() {
    const items = useSelector((state) => state.cart.items)

    if(items.length === 0){
        return <h3 style={{ textAlign: "center" }}>Cart Is Empty</h3>
    }

    return (
        <div>
            {items.map((item) => {
                <CartItem key = {item.id} item = {item}/>
            })}
        </div>
    )
}