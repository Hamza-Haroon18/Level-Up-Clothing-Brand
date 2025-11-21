import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import './salefragshow-product.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function ProductPagefragsale() {
  const [items, setitems] = useState(null);
  const [information, setInformation] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/admin/salefragshow-product/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched items:", data);
        setitems(data);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  const pricecalculate = (value) => {
    value = value / 3;
    return parseInt(value);
  };

  return (
    <>
      <Header />
      <div className="products">
        {items ? (
          <>
            <div className="product-image">
              <img src={`http://localhost:3000/uploads/${items.image}`} alt={items.productname} />
              <p><strong>Disclaimer: </strong>
                Due to lighting & screen differences, actual product color may slightly vary.
              </p>
              <button><Link to={`/admin/salefrag/salefragedit-product/${id}`}>Edit Product</Link></button>
              <button><Link to={`/admin/salefragdelete-product/${id}`}>Delete Product</Link></button>
            </div>

            <div className="product-info">
              <h1>Product Information</h1>
              <div className="detail-grid">
                <div className="row"><span className="labels">Product Name:</span><span className="values">{items.productname}</span></div>
                <div className="row"><span className="labels">Product Code:</span><span className="values">{items._id}</span></div>
                <div className="row"><span className="labels">Status:</span><span className="values">In Stock</span></div>
                <div className="row"><span className="labels">Price:</span><span className="values">PKR {items.price}</span></div>
                <div className="row"><span className="labels">Installment:</span><span className="values">3 x PKR {pricecalculate(items.price)}</span></div>
                {/* <div className="row"><span className="labels">Available Volumes:</span><span className="values">{(items.volume || []).join(', ')}</span></div> */}
                <div className="row">
                  <span className="labels">Size: </span>
                  <span className="values">
                    {items.volume?.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}{index < items.volume.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <h1 className="details-toggle" onClick={() => setInformation(!information)}>
                More Details
                <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${information ? 'rotate' : ''}`} />
              </h1>

              {information && (
                <div className="detail-grid">
                  <div className="row"><span className="labels">Category:</span><span className="values">{items.category}</span></div>
                  <div className="row"><span className="labels">Fragrance Type:</span><span className="values">{items.fragranceType}</span></div>
                  <div className="row"><span className="labels">Gender:</span><span className="values">{items.gender}</span></div>
                  <div className="row"><span className="labels">Occasion:</span><span className="values">{items.occasion}</span></div>
                  <div className="row"><span className="labels">Longevity:</span><span className="values">{items.longevity}</span></div>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductPagefragsale;
