import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import './cosmeticsshow-product.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function ProductPagecosmetics() {
  const [items, setitems] = useState(null);
  const [information, setInformation] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/admin/cosmeticsshow-product/${id}`)
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
            <div className="product-images">
              <img src={`http://localhost:3000/uploads/${items.image}`} alt={items.productname} />
              <p><strong>Disclaimer: </strong>
                Due to lighting & screen differences, actual product color may slightly vary.
              </p>
              <button><Link to={`/admin/cosmetics/cosmeticsedit-product/${id}`}>Edit Product</Link></button>
              <button><Link to={`/admin/cosmeticsdelete-product/${id}`}>Delete Product</Link></button>
            </div>

            <div className="product-info">
              <h1>Product Information</h1>
              <div className="detail-grid">
                <div className="row"><span className="labels">Product Name:</span><span className="values">{items.productname}</span></div>
                <div className="row"><span className="labels">Product Code:</span><span className="values">{items._id}</span></div>
                <div className="row"><span className="labels">Status:</span><span className="values">In Stock</span></div>
                <div className="row"><span className="labels">Price:</span><span className="values">PKR {items.price}</span></div>
                <div className="row"><span className="labels">Installment:</span><span className="values">3 x PKR {pricecalculate(items.price)}</span></div>
                {/* <div className="row"><span className="label">Available Volumes:</span><span className="value">{(items.volume || []).join(', ')}</span></div> */}
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
                <div className="details-grid">
                  <div className="row"><span className="labels">Category:</span><span className="values">{items.category}</span></div>
                  <div className="row"><span className="labels">Cosmetic Type:</span><span className="values">{items.productType}</span></div>
                  <div className="row"><span className="labels">Brand:</span><span className="values">{items.brand}</span></div>
                  <div className="row"><span className="labels">Skin Type:</span><span className="values">{items.skinType}</span></div>
                  <div className="row"><span className="labels">Finish:</span><span className="values">{items.finish}</span></div>
                  <div className="row"><span className="labels">Shade:</span><span className="values">{items.shade}</span></div>
                  <div className="row"><span className="labels">Size:</span><span className="values">{items.size}</span></div>
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

export default ProductPagecosmetics;
