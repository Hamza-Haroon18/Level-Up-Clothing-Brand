// import Header from './header';
// import Footer from './footer';
// import './orderhistory.css';
// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// function Orderhistory() {
//     const [items, setitems] = useState(null);
//     const [information, setInformation] = useState(false);
//     const [orderno, setorderno] = useState(0);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`http://localhost:3000/cart/checkout`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log("Fetched items:", data);
//                 setitems(data);
//             })
//             .catch(err => console.error("Fetch error:", err));
//     }, []);

//     return (
//         <>
//             <Header />
//             <h1>Order History</h1>
//             <div className="products">
//                 {items && items.length > 0 ? (
//                     items.map((order, idx) => (
//                         <div key={order._id} className="product-info">
//                             <h2>Order #{idx + 1}</h2>
//                             <div className="details">
//                                 <div className="row"><span className="labels">Customer Name:</span><span className="values">{order.name}</span></div>
//                                 <div className="row"><span className="labels">Email:</span><span className="values">{order.email}</span></div>
//                                 <div className="row"><span className="labels">Mobile No:</span><span className="values">{order.mobile}</span></div>
//                                 <div className="row"><span className="labels">Address: </span><span className="values">{order.address}</span></div>
//                                 <div className="row"><span className="labels">Landmark: </span><span className="values">{order.landmark}</span></div>
//                                 <div className="row"><span className="labels">City:</span><span className="values">{order.city}</span></div>
//                                 <div className="row"><span className="labels">Country: </span><span className="values">{order.country}</span></div>
//                                 <div className="row"><span className="labels">Postal Code: </span><span className="values">{order.postalCode}</span></div>
//                                 <div className="row"><span className="labels">Province: </span><span className="values">{order.province}</span></div>
//                                 <div className="row"><span className="labels">Message: </span><span className="values">{order.message}</span></div>
//                                 <div className="row"><span className="labels">Total Items:</span><span className="values">{order.cart.length}</span></div>

//                             </div>
//                             <button className="detail-toggle" onClick={() => setInformation(information === order._id ? null : order._id)}>
//                                 Order Details
//                                 <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${information === order._id ? 'rotate' : ''}`} />
//                             </button>
//                             {information === order._id && (
//                                 <div className="details">
//                                     {order.cart.map((item, index) => (
//                                         <div key={index} className="cart-item">
//                                             <div className="row">
//                                                 <span className="labels">Image:</span>
//                                                 <span className="values">
//                                                     <img src={`http://localhost:3000/uploads/${item.image}`} alt="product" width="80" />
//                                                 </span>
//                                             </div>
//                                             <div className="row"><span className="labels">Product Id:</span><span className="values">{item.productId}</span></div>
//                                             <div className="row"><span className="labels">Size:</span><span className="values">{item.size}</span></div>
//                                             <div className="row"><span className="labels">Quantity:</span><span className="values">{item.quantity}</span></div>
//                                             <div className="row"><span className="labels">Delivery:</span><span className="values">{order.delivery}</span></div>
//                                             <div className="row"><span className="labels">Total Price:</span><span className="values">{order.totalAmount}</span></div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No orders found.</p>
//                 )}

//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Orderhistory;
import Header from './header';
import Footer from './footer';
import './orderhistory.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Orderhistory() {
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPages]=useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/cart/checkout?page=${page}&limit=5`)
            .then(res => res.json())
            .then(data => {
                setOrders(data.orders);
                setTotalPages(data.totalPage);
            })
            .catch(err => console.error('Fetch error:', err));
    }, [page]);

    const toggleOrderDetails = (id) => {
        setExpandedOrder(expandedOrder === id ? null : id);
    };


    const handleStatusChange = async (orderId, newStatus) => {
  try {
    await fetch(`http://localhost:3000/track/status/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o._id === orderId ? { ...o, status: newStatus } : o
      )
    );
  } catch (error) {
    console.error("Failed to update status", error);
  }
};

    return (
        <>
            <Header />
            <div className="order-history-page">
                <h1>Order History</h1>
                {orders.length > 0 ? (
                    orders.map((order, idx) => (
                        <div key={order._id} className="order-card">
                            <div className="order-summary">
                                <h2>Order #{idx + 1}</h2>
                                <div className="order-info">
                                    <h2>Order No: {order.orderNumber}</h2>
                                    <div><strong>Customer:</strong> {order.name}</div>
                                    <div><strong>Email:</strong> {order.email}</div>
                                    <div><strong>Mobile:</strong> {order.mobile}</div>
                                    <div><strong>Address:</strong> {order.address}</div>
                                    <div><strong>City:</strong> {order.city}</div>
                                    <div><strong>Country:</strong> {order.country}</div>
                                    <div><strong>Province:</strong> {order.province}</div>
                                    <div><strong>Postal Code:</strong> {order.postalCode}</div>
                                    {order.message && <div><strong>Message:</strong> {order.message}</div>}
                                    <div><strong>Total Items:</strong> {order.cart.length}</div>
                                </div>
                                <button
                                    className="toggle-details-btn"
                                    onClick={() => toggleOrderDetails(order._id)}
                                >
                                    Order Details
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        className={`dropdown-icon ${expandedOrder === order._id ? 'rotate' : ''}`}
                                    />
                                </button>
                            </div>

                            {expandedOrder === order._id && (
                                <div className="order-details">
                                    <h2>Items</h2>
                                    {order.cart.map((item, index) => (
                                        <div key={index} className="cart-item">
                                            <div className="cart-item-content">
                                                <div className="cart-item-image">
                                                    <img
                                                        src={`http://localhost:3000/uploads/${item.image}`}
                                                        alt={item.productId}
                                                    />
                                                </div>
                                                <div className="cart-item-details">
                                                    <div><strong>Product Id:</strong> {item.productId}</div>
                                                    <div><strong>Size:</strong> {item.size}</div>
                                                    <div><strong>Quantity:</strong> {item.quantity}</div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                    <div className="order-totals">
                                        <div className="item-row">
                                            <span className="item-label">Delivery:</span>
                                            <span className="item-value">PKR {Number(order.delivery).toLocaleString()}</span>
                                        </div>
                                        <div className="item-row total-row">
                                            <span className="item-label">Total Price With Delivery:</span>
                                            <span className="item-value">
                                                PKR {(Number(order.totalAmount) + Number(order.delivery)).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="item-row total-row">
                                            <span className="item-label">Order Status:</span>
                                            <span className="item-value">
                                                <select value={order.status}
                                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                    required>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Confirmed">Confirmed</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))
                ) : (
                    <p className="no-orders">No orders found.</p>
                )}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
                <span>
                    Page <span className="active-page">{page}</span> of {totalPage}
                </span>

                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPage))} disabled={page === totalPage}>Next</button>
            </div>
            <Footer />
        </>
    );
}

export default Orderhistory;
