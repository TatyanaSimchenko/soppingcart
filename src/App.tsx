import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import { Drawer, Grid, LinearProgress, Badge, TextField } from "@material-ui/core";
//Styles
import { Wrapper, StyledButton } from "./App.styles";
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [value, setValue] = useState('')
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map(item => item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item);
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    ));
  };

  const removeItem = (id: number): void => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>

  const filteredData = data?.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <Wrapper>
      <TextField
        margin="normal"
        label="Search..."
        variant="outlined"
        onChange={(e) => setValue(e.target.value)} />
      <Drawer anchor="left" open={cartOpen}
        onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          removeItem={removeItem}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <i className="fas fa-cart-plus"></i>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {filteredData?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}


export default App;
