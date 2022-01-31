import { Button } from "@material-ui/core";
//Types
import { CartItemType } from "../../App";
//Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    removeItem: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart, removeItem }) =>
    <Wrapper>
        <div>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    // size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    // size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}>
                    +
                </Button>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeItem(item.id)}>
                    Delete
                </Button>
            </div>
        </div>
    </Wrapper>;

export default CartItem