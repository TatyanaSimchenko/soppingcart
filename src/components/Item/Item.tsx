import { Button } from "@material-ui/core";
//Types
import { CartItemType } from "../../App";
import { Wrapper } from "./item.styles";
//Styles

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
            <h3 className="price">${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)

export default Item

