import { useEffect, useState } from 'react';
import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (!email) {
      alert("Please log in to view your cart.");
      navigate("/login");
      return;
    }

    setUserEmail(email);

    const storedCart = localStorage.getItem(`cart_${email}`);
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, [navigate]);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  }, [cart]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    if (userEmail) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(updatedCart));
    }
  };

  const removeItem = (productId, size) => {
    const updatedCart = cart.filter(item => !(item.productId === productId && item.size === size));
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  return (
    <>
      <HeaderUser />
      <div className="container">
        <div className="cartitems">
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.productId + item.size} className="cart-item">
                <img src={`http://localhost:3000/uploads/${item.image}`} alt={item.productname} />
                <div className="info">
                  <h3>{item.productname} ({item.size.toUpperCase()})</h3>
                  <p><strong>Price:</strong> PKR {item.price}</p>
                  <p className="quantity"><strong>Quantity:</strong>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => {
                        const updatedCart = cart.map(product => {
                          if (product.productId === item.productId && product.size === item.size) {
                            return {
                              ...product,
                              quantity: Math.max(product.quantity - 1, 1)
                            };
                          }
                          return product;
                        });
                        updateCart(updatedCart);
                      }}
                    />
                    {item.quantity}
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        const updatedCart = cart.map(product => {
                          if (product.productId === item.productId && product.size === item.size) {
                            return {
                              ...product,
                              quantity: product.quantity + 1
                            };
                          }
                          return product;
                        });
                        updateCart(updatedCart);
                      }}
                    />
                  </p>
                  <p><strong>Total:</strong> PKR {item.price * item.quantity}</p>
                  <button className="clear-btn" onClick={() => removeItem(item.productId, item.size)}>Remove Item</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className='total'>
          <h3>Summary</h3>
          <p><strong>Items:</strong> {cart.length}</p>
          <p><strong>Grand Total:</strong> PKR {totalAmount}</p>
          {cart.length > 0 && (
            <>
              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>

              <Link to="./checkout">
                <button className="checkout-btn">
                  Proceed To Checkout
                </button>
              </Link>
            </>
          )}

        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default Cart;
