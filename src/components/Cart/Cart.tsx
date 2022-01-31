import CartItem from "../CartItem/CartItem";
//types
import { CartItemType } from "../../App";
//Styles
import { Button } from "@material-ui/core";
import { Wrapper } from "./Cart.styles";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    removeItem: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, removeItem }) => {
    const calcTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    removeItem={removeItem}
                />
            ))}
            <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
            <Button
                size="small"
                disableElevation
                variant="contained"
            >
                Сheckout
            </Button>
        </Wrapper>
    )
}

export default Cart