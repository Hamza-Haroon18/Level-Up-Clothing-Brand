import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import './salefragshow-product.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ProductPagefragsaleUser() {
  const [items, setitems] = useState(null);
  const [quantity, setquantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [information, setInformation] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/admin/salefragshow-product/${id}`)
      .then(res => res.json())
      .then(data => setitems(data))
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  const pricecalculate = (value) => parseInt(value / 3);

  const handlePlus = () => setquantity(prev => prev + 1);
  const handleMinus = () => quantity > 1 && setquantity(prev => prev - 1);

  const addToCart = () => {
    console.log(sessionStorage.getItem("userEmail"));

    const userEmail = sessionStorage.getItem("userEmail");

    if (!userEmail) {
      alert("Please log in to add items to your cart.");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }

    const cartKey = `cart_${userEmail}`;
    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const cartItem = {
      productId: String(items._id),
      productname: items.productname,
      price: items.price,
      image: items.image,
      size: String(selectedSize),
      quantity: quantity,
    };

    const existingIndex = existingCart.findIndex(
      (item) => item.productId === cartItem.productId && item.size === cartItem.size
    );

    if (existingIndex !== -1) {
      existingCart[existingIndex].quantity += cartItem.quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    setquantity(1);
    alert("Item added to cart successfully!");
  };

  return (
    <>
      <HeaderUser />
      <div className="userproduct">
        {items ? (
          <>
            <div className="products-image">
              <img src={`http://localhost:3000/uploads/${items.image}`} alt={items.productname} />
              <p><strong>Disclaimer: </strong>Colors may vary due to lighting.</p>
              <p><strong>Disclaimer: </strong>
                Due to photographic lighting & screen differences, colors of the actual product may slightly vary from the picture.
              </p>
                <button> <a href="/uploads/sizechart.webp" target="_blank">Size Chart</a></button> 
            </div>

            <div className="product-info">
              <h1>Product Information</h1>
              <div className="details-grid">
                <div className="row"><span className="userlabel">Product Name:</span><span className="uservalue">{items.productname}</span></div>
                <div className="row"><span className="userlabel">Product Code:</span><span className="uservalue">{items._id}</span></div>
                <div className="row"><span className="userlabel">Status:</span><span className="uservalue">In Stock</span></div>
                <div className="row"><span className="userlabel">Price:</span><span className="uservalue">{items.price}</span></div>
                <div className="row"><span className="userlabel">Installment:</span><span className="uservalue">PKR {pricecalculate(items.price)}</span></div>

                <div className="row">
                  <span className="userlabel">Size:</span>
                  <span className="uservalue">
                    {items.size?.map((item, index) => (
                      <span
                        key={index}
                        onClick={() => setSelectedSize(item)}
                        className={`size-btn ${selectedSize === item ? 'selected' : ''}`}
                      >
                        {item.toUpperCase()}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="row">
                  <span className="userlabel">
                    <span className="userlabelquantity">
                      <FontAwesomeIcon icon={faMinus} onClick={handleMinus} /> {quantity} <FontAwesomeIcon icon={faPlus} onClick={handlePlus} />
                    </span>
                  </span>
                  <span className="uservalue">
                    <button className="cart-btn" onClick={addToCart}>
                      Add To Cart
                    </button>
                  </span>
                </div>
              </div>

              <h1 className="details-toggle" onClick={() => setInformation(!information)}>
                More Details <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${information ? 'rotate' : ''}`} />
              </h1>

              {information && (
                <div className="details-grid">
                  <div className="row"><span className="userlabel">Category:</span><span className="uservalue">{items.category}</span></div>
                  <div className="row"><span className="userlabel">Fragrance Type:</span><span className="uservalue">{items.fragranceType}</span></div>
                  <div className="row"><span className="userlabel">Gender:</span><span className="uservalue">{items.gender}</span></div>
                  <div className="row"><span className="userlabel">Occasion:</span><span className="uservalue">{items.occasion}</span></div>
                  <div className="row"><span className="userlabel">Longevity:</span><span className="uservalue">{items.longevity}</span></div>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <FooterUser />
    </>
  );
}

export default ProductPagefragsaleUser;
