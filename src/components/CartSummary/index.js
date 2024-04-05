import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalQuantity = cartList.reduce(
        (total, item) => total + item.quantity,
        0,
      )
      const totalPrice = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )
      return (
        <div>
          <h1>Order Total: RS{totalPrice}/-</h1>
          <p>{totalQuantity} Items in cart</p>
          <button>CheckOut</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
