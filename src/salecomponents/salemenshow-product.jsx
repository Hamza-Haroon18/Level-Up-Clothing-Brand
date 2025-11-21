import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import './salemenshow-product.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function ProductPagemensale() {
  const [items, setitems] = useState(null);
  const [information, setInformation] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/admin/salemenshow-product/${id}`)
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
                Due to photographic lighting & screen differences, colors of the actual product may slightly vary from the picture.
              </p>
              <button><Link to={`/admin/salemen/salemenedit-product/${id}`}>Edit Product</Link></button>
              <button><Link to={`/admin/salemendelete-product/${id}`}>Delete Product</Link></button>
            </div>

            <div className="product-info">
              <h1>Product Information</h1>
              <div className="detail-grid">
                <div className="row"><span className="labels">Product Name:</span><span className="values">{items.productname}</span></div>
                <div className="row"><span className="labels">Product Code: </span><span className="values">{items._id}</span></div>
                <div className="row"><span className="labels">Status: </span><span className="values">In Stock</span></div>
                <div className="row"><span className="labels">Price: </span><span className="values">{items.price}</span></div>
                <div className="row"><span className="labels">Installment: </span><span className="values">Pay in 3 installments of PKR {pricecalculate(items.price)}</span></div>
                {/* <div className="row"><span className="labels">Size: </span><span className="values">{items.size}</span></div> */}
                <div className="row">
                  <span className="labels">Size: </span>
                  <span className="values">
                    {items.size?.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}{index < items.size.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="row"><span className="labels"><a className="chart" href="/uploads/sizechart.webp" target="_blank">Size Chart</a></span><span className="values"></span></div>
              </div>
              <h1 className="details-toggle" onClick={() => setInformation(!information)}>
                More Details
                <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${information ? 'rotate' : ''}`} />
              </h1>

              {information && (
                <div className="detail-grid">
                  <div className="row"><span className="labels">Category:</span><span className="values">{items.category}</span></div>
                  <div className="row"><span className="labels">Fabric:</span><span className="values">{items.fabric}</span></div>
                  <div className="row"><span className="labels">Styling:</span><span className="values">{items.styling}</span></div>
                  <div className="row"><span className="labels">Wear:</span><span className="values">{items.wear}</span></div>
                  <div className="row"><span className="labels">Trouser:</span><span className="values">{items.trouser}</span></div>
                  <div className="row"><span className="labels">Color:</span><span className="values">{items.color}</span></div>
                  <div className="row"><span className="labels">Season:</span><span className="values">{items.season}</span></div>
                  <div className="row"><span className="labels">Type:</span><span className="values">{items.productType}</span></div>
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

export default ProductPagemensale;
