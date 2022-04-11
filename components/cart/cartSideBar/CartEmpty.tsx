export const CartEmpty = () => {
  return (
    <div className="cart__main">
      <div className="cart__main-empty">
        <p className="cart-emojis">😔🎒</p>
        <p>You got nothing in your bag</p>
        <button className="btn continue">Continue Shopping</button>
      </div>
    </div>
  );
};
