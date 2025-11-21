// import './checkout.css';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function Checkout() {
//     const navigate = useNavigate();
//     const [orderMessage, setOrderMessage] = useState("");
//     const [orderStatus, setOrderStatus] = useState("");

//     const [orderPlaced, setOrderPlaced] = useState(false);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [delivery, setdelivery] = useState(0);
//     const [userEmail, setUserEmail] = useState(null);
//     const [billing, setbilling] = useState(false);
//     const [cart, setCart] = useState([]);
//     const [name, setName] = useState('');
//     const [gender, setGender] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [alternateMobile, setAlternateMobile] = useState('');
//     const [address, setAddress] = useState('');
//     const [landmark, setLandmark] = useState('');
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//     const [postalCode, setPostalCode] = useState('');
//     const [province, setProvince] = useState('');
//     const [message, setmessage] = useState('');

//     useEffect(() => {
//         const useremail = sessionStorage.getItem("userEmail");
//         if (!useremail) {
//             alert("Please log in to view your cart.");
//             navigate("/login");
//             return;
//         }

//         setUserEmail(useremail);

//         const storedCart = localStorage.getItem(`cart_${useremail}`);
//         setCart(storedCart ? JSON.parse(storedCart) : []);
//     }, [navigate]);

//     useEffect(() => {
//         let total = 0;
//         cart.forEach(item => {
//             total += item.price * item.quantity;
//         });
//         setTotalAmount(total);
//     }, [cart]);

//     const validateEmail = (email) =>
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

//     const validateMobile = (mobile) => /^\d{11}$/.test(mobile);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name || !email || !mobile || !alternateMobile || !address || !landmark || !city || !postalCode || !province || !country) {
//             // alert("Please fill in all required fields.");
//             setOrderStatus("error");
//             setOrderMessage("Please fill in all required fields.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             // alert("Please enter a valid email.");
//             setOrderStatus("error");
//             setOrderMessage("Please enter a valid email.");
//             return;
//         }

//         if (!validateMobile(mobile)) {
//             // alert("Mobile number must be exactly 11 digits.");
//             setOrderStatus("error");
//             setOrderMessage("Mobile number must be exactly 11 digits.");
//             return;
//         }

//         if (!validateMobile(alternateMobile)) {
//             // alert("Mobile number must be exactly 11 digits.");
//             setOrderStatus("error");
//             setOrderMessage("Mobile number must be exactly 11 digits.");
//             return;
//         }

//         const formData = {
//             name,
//             email,
//             mobile,
//             alternateMobile,
//             address,
//             landmark,
//             city,
//             country,
//             postalCode,
//             province,
//             message,
//             cart: cart.map(item => ({
//                 productId: item.productId,
//                 size: item.size,
//                 quantity: item.quantity,
//                 price: item.price,
//                 image: item.image
//             }))
//         };

//         try {
//             const res = await fetch("http://localhost:3000/cart/checkout", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             if (res.ok) {
//                 localStorage.removeItem(`cart_${userEmail}`);
//                 setCart([]);
//                 setOrderPlaced(true);
//                 setTimeout(() => {
//                     navigate('/');
//                 }, 3000);

//             } else {
//                 // alert("Failed to submit checkout details.");
//                 setOrderStatus("error");
//                 setOrderMessage("Failed to submit checkout details.");
//             }
//         } catch (err) {
//             console.error(err);
//             setOrderStatus("error");
//             setOrderMessage("Server Error");
//         }
//     };

//     return (
//         <div className="modal-overlay">
//             {orderPlaced && (
//                 <div className="order-popup">
//                     <p>Your order has been placed successfully!</p>
//                 </div>
//             )}
//             {orderMessage && (
//                 <div className={`order-popup ${orderStatus}`}>
//                     <p>{orderMessage}</p>
//                 </div>
//             )}

//             <div className="checkout-container">
//                 <form className="checkout-form" onSubmit={handleSubmit}>
//                     <h2>Checkout Details</h2>

//                     <div className="input-group">
//                         <label>Full Name</label>
//                         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Email</label>
//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </div>

//                     {/* <div className="input-group">
//                     <label>Gender</label>
//                     <select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                     </select>
//                 </div> */}

//                     <div className="input-group">
//                         <label>Phone Number</label>
//                         <input type="text" maxLength="11" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Alternate Phone Number</label>
//                         <input type="text" maxLength="11" value={alternateMobile} onChange={(e) => setAlternateMobile(e.target.value.replace(/\D/g, ''))} />
//                     </div>

//                     <div className="input-group">
//                         <label>City</label>
//                         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Country</label>
//                         <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Address</label>
//                         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Nearest Landmark</label>
//                         <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
//                     </div>

//                     <div className="input-group">
//                         <label>Province</label>
//                         <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Postal Code</label>
//                         <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
//                     </div>

//                     <div className="input-group">
//                         <label>Message</label>
//                         <textarea
//                             value={message}
//                             onChange={(e) => setmessage(e.target.value)}
//                             placeholder="Enter any additional notes or instructions..."
//                             rows={3}
//                         />
//                     </div>

//                     <div className="input-group" style={{ gridColumn: "1 / -1" }}>
//                         <button type="submit">Submit Order</button>
//                     </div>
//                     </form>


//                 <div className="shipping">
//                     <h2>Shipping Method</h2>
//                     <div>
//                         <div className="boxshop">
//                             <label className="radio-option">
//                                 <input
//                                     type="radio"
//                                     value="100"
//                                     checked={delivery === 100.00}
//                                     onChange={() => setdelivery(100.00)}
//                                 />
//                                 <span className="custom-radio"></span>
//                             </label>
//                             <p>Standard</p>
//                             <p>RS 100</p>
//                         </div>

//                         <div className="boxshop">
//                             <label className="radio-option">
//                                 <input
//                                     type="radio"
//                                     value="0"
//                                     checked={delivery === 0.00}
//                                     onChange={() => setdelivery(0.00)}
//                                 />
//                                 <span className="custom-radio"></span>
//                             </label>
//                             <p>Free Delivery on All Prepaid Orders!</p>
//                             <p>FREE</p>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="payment">
//                     <h2>Payment</h2>
//                     <p>All transactions are secure and encrypted.</p>
//                     <div>
//                         <div className="boxshop">
//                             <p>Cash on Delivery (COD)</p>
//                             <p>COD is only applicable on local orders below 50,000 PKR.
//                                 <br />
//                                 If your order amount does not fall within this range or the shipping country is other than Pakistan, our team will contact you for payment via bank transfer.</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <div className="billing">
//                     <h2>Billing Address</h2>
//                     <div>
//                         <div className="boxshop">
//                             <label className="radio-option">
//                                 <input
//                                     type="radio"
//                                     name="billingOption"
//                                     value="same"
//                                     checked={!billing}
//                                     onChange={() => setbilling(false)}
//                                 />
//                                 <span className="custom-circle" />
//                                 Same as shipping address
//                             </label>
//                         </div>

//                         <div className="boxshop">

//                             <label className="radio-option">
//                                 <input
//                                     type="radio"
//                                     name="billingOption"
//                                     value="different"
//                                     checked={billing}
//                                     onChange={() => setbilling(true)}
//                                 />
//                                 <span className="custom-circle" />
//                                 Use a different billing address
//                             </label>
//                         </div>

//                         {billing && (
//                             <form className="checkout-form" onSubmit={handleSubmit}>
//                                 <h2>Billing Details</h2>

//                                 <div className="input-group">
//                                     <label>Full Name</label>
//                                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Email</label>
//                                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Phone Number</label>
//                                     <input type="text" maxLength="11" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Alternate Phone Number</label>
//                                     <input type="text" maxLength="11" value={alternateMobile} onChange={(e) => setAlternateMobile(e.target.value.replace(/\D/g, ''))} />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>City</label>
//                                     <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Country</label>
//                                     <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Address</label>
//                                     <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Nearest Landmark</label>
//                                     <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Province</label>
//                                     <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Postal Code</label>
//                                     <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
//                                 </div>

//                                 <div className="input-group">
//                                     <label>Message</label>
//                                     <textarea
//                                         value={message}
//                                         onChange={(e) => setmessage(e.target.value)}
//                                         placeholder="Enter any additional notes or instructions..."
//                                         rows={3}
//                                     />
//                                 </div>
//                             </form>
//                         )}
//                     </div>
//                 </div> */}

//             </div>

//             <div className='order'>
//                 <h2>Order Summary</h2>
//                 {cart.length > 0 ? (
//                     <table className="summary-table">
//                         <thead>
//                             <tr>
//                                 <th>Product Image</th>
//                                 <th>Product Name</th>
//                                 <th>Size</th>
//                                 <th>Quantity</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cart.map((item) => (
//                                 <tr key={item.productId + item.size}>
//                                     <td><img src={`http://localhost:3000/uploads/${item.image}`} alt={item.productname} /></td>
//                                     <td>{item.productname}</td>
//                                     <td>{item.size.toUpperCase()}</td>
//                                     <td>{item.quantity}</td>
//                                     <td>PKR {item.price * item.quantity}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>Your cart is empty.</p>
//                 )}

//                 <div className="summary-totals">
//                     <p><strong>Items : </strong> {cart.length}</p>
//                     <p><strong>SubTotal : </strong> PKR {totalAmount}</p>
//                     <p><strong>Delivery : </strong> {delivery}</p>
//                     <p><strong>Grand Total : </strong> PKR {totalAmount + delivery}</p>
//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Checkout;
import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import './checkout.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    const [orderMessage, setOrderMessage] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [delivery, setdelivery] = useState(0);
    const [userEmail, setUserEmail] = useState(null);
    const [billing, setbilling] = useState(false);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
    const [address, setAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [province, setProvince] = useState('');
    const [message, setmessage] = useState('');

    useEffect(() => {
        const useremail = sessionStorage.getItem("userEmail");
        if (!useremail) {
            alert("Please log in to view your cart.");
            navigate("/login");
            return;
        }

        setUserEmail(useremail);

        const storedCart = localStorage.getItem(`cart_${useremail}`);
        setCart(storedCart ? JSON.parse(storedCart) : []);
    }, [navigate]);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalAmount(total);
    }, [cart]);

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const validateMobile = (mobile) => /^\d{11}$/.test(mobile);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !mobile || !alternateMobile || !address || !landmark || !city || !postalCode || !province || !country) {
            setOrderStatus("error");
            setOrderMessage("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            setOrderStatus("error");
            setOrderMessage("Please enter a valid email.");
            return;
        }

        if (!validateMobile(mobile)) {
            setOrderStatus("error");
            setOrderMessage("Mobile number must be exactly 11 digits.");
            return;
        }

        if (!validateMobile(alternateMobile)) {
            setOrderStatus("error");
            setOrderMessage("Mobile number must be exactly 11 digits.");
            return;
        }

        const formData = {
            name,
            email,
            mobile,
            alternateMobile,
            address,
            landmark,
            city,
            country,
            postalCode,
            province,
            message,
            totalAmount,
            delivery,
            cart: cart.map(item => ({
                productId: item.productId,
                size: item.size,
                quantity: item.quantity,
                price: item.price,
                image: item.image
            }))
        };

        try {
            const res = await fetch("http://localhost:3000/cart/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                const orderNumber = data.orderNumber;

                localStorage.removeItem(`cart_${userEmail}`);
                setCart([]);
                setOrderPlaced(true);
                setTimeout(() => {
                    navigate('/cart/checkout/order',{ state: { orderNumber } });
                }, 3000);

            } else {
                setOrderStatus("error");
                setOrderMessage("Failed to submit checkout details.");
            }
        } catch (err) {
            console.error(err);
            setOrderStatus("error");
            setOrderMessage("Server Error");
        }
    };

    return (
        <>
        <HeaderUser />
        <div className="checkout-page">
            {orderPlaced && (
                <div className="order-popup">
                    <p>Your order has been placed successfully!</p>
                </div>
            )}
            {orderMessage && (
                <div className={`order-popup ${orderStatus}`}>
                    <p>{orderMessage}</p>
                </div>
            )}

            <div className="checkout-layout">
                <div className="checkout-form-container">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <h2>Checkout Details</h2>

                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Phone Number</label>
                            <input type="text" maxLength="11" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))} required />
                        </div>

                        <div className="input-group">
                            <label>Alternate Phone Number</label>
                            <input type="text" maxLength="11" value={alternateMobile} onChange={(e) => setAlternateMobile(e.target.value.replace(/\D/g, ''))} />
                        </div>

                        <div className="input-group">
                            <label>City</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Country</label>
                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Address</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Nearest Landmark</label>
                            <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                        </div>

                        <div className="input-group">
                            <label>Province</label>
                            <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Postal Code</label>
                            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                        </div>

                        <div className="input-group">
                            <label>Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setmessage(e.target.value)}
                                placeholder="Enter any additional notes or instructions..."
                                rows={3}
                            />
                        </div>

                        <div className="shipping">
                            <h2>Shipping Method</h2>
                            <div className="boxshop">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        value="100"
                                        checked={delivery === 100}
                                        onChange={() => setdelivery(100)}
                                    />
                                    <span className="custom-radio"></span>
                                    <p>Standard</p>
                                </label>
                                <p>RS 100</p>
                            </div>

                            <div className="boxshop">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        value="0"
                                        checked={delivery === 0}
                                        onChange={() => setdelivery(0)}
                                    />
                                    <span className="custom-radio"></span>
                                    <p>Free Delivery on Prepaid Orders</p>
                                </label>
                                <p>FREE</p>
                            </div>
                        </div>

                        <div className="payment">
                            <h2>Payment</h2>
                            <div className="boxshop">
                                <p>Cash on Delivery (COD)</p>
                                <p>COD is applicable for local orders below 50,000 PKR.
                                    <br />Our team will contact you for other payment methods if needed.</p>
                            </div>
                        </div>

                        <div className="input-group" style={{ gridColumn: "1 / -1" }}>
                            <button type="submit">Submit Order</button>
                        </div>
                    </form>
                </div>

                <div className='order-summary-container'>
                    <div className='order-summary'>
                        <h2>Order Summary</h2>
                        {cart.length > 0 ? (
                            <div className="order-items">
                                {cart.map(item => (
                                    <div key={item.productId + item.size} className="order-item">
                                        <img src={item.image ? `http://localhost:3000/uploads/${item.image}` : '/placeholder.png'} alt={item.productName} />
                                        <div className="order-item-details">
                                            <p>{item.productName}</p>
                                            <p>Size: {item.size.toUpperCase()}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: PKR {item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : <p>Your cart is empty.</p>}
                        <div className="summary-totals">
                            <p><strong>Items:</strong> {cart.length}</p>
                            <p><strong>SubTotal:</strong> PKR {totalAmount}</p>
                            <p><strong>Delivery:</strong> PKR {delivery}</p>
                            <p><strong>Grand Total:</strong> PKR {totalAmount + delivery}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterUser />
        </>
    );
}

export default Checkout;