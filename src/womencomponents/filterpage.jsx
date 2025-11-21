import './add_data.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import ProductPage from './show-product';
function Filterpage(group,items) {
    const [showForm, setShowForm] = useState(false);
    const [product, setaddproduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/women')
            .then(res => res.json())
            .then(data => {
                const validproduct = data.filter(p => p.productname && p.price)
                setaddproduct(validproduct)
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);
    
    return (
        <>
            <div className='sort-header'>
                <div className='item1'>
                    <h3>Sort By </h3>
                    <select>
                        <option value="mostRelevant">Most Relevant</option>
                        <option value="alphabeticalAZ">Alphabetically (A-Z)</option>
                        <option value="alphabeticalZA">Alphabetically (Z-A)</option>
                        <option value="priceLH">Price (Low-High)</option>
                        <option value="priceHL">Price (High-Low)</option>
                        <option value="newest">Newest Arrival</option>
                        <option value="rated">Top Rated</option>
                        <option value="review">Most Reviewed</option>
                    </select>
                </div>

                <div className='item2'>
                    {/* <button onClick={() => setShowForm(true)}>Add Product</button> */}
                    <button><Link to="/women/add-product">Add product</Link></button>
                </div>

            </div>
            {/* {showForm && <Addproduct onClose={() => setShowForm(false)} />} */}

            {/* <div className="collection"> */}
            {/* <h1>Shop By Men Category</h1> */}
            <div className="innercollection">
                {product.map((key, index) => (
                    <div className="box" key={index}>
                        <div className="image_box"><img src={`http://localhost:3000/uploads/${key.image}`} alt={key.productname} />
                        </div>

                        <h4 className="image_heading">{key.productname}</h4>
                        <h4 className="image_heading">Rs: {key.price}</h4>

                        <button><Link to={`/show-product/${key._id}`}>Show Product</Link></button>
                        <button><Link to={`/women/edit-product/${key._id}`}>Edit Product</Link></button>
                        <button><Link to={`/delete-product/${key._id}`}>Delete Product</Link></button>
                    </div>
                ))}
                {/* <div className="box">
                    <div className="image_box"><img src="" alt="" /></div>
                    <h4 className="image_heading">Kurta</h4>
                </div>
                <div className="box">
                    <div className="image_box"><img src="" alt="" /></div>
                    <h4 className="image_heading">Waistcoat</h4>
                </div>
                <div className="box">
                    <div className="image_box"><img src="" alt="" /></div>
                    <h4 className="image_heading">Grooms Sherwani</h4>
                </div> */}
            </div>
            {/* </div> */}
        </>
    )
}
export default Filterpage

