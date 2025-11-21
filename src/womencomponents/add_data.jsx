import './add_data.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import ProductPage from './show-product';
function Add_data({ filters }) {
    const [showForm, setShowForm] = useState(false);
    const [product, setaddproduct] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/admin/women?page=${page}&limit=12`)

            .then(res => res.json())
            .then(data => {
                const validproduct = data.totalproduct.filter(p => p.productname && p.price);
                setaddproduct(validproduct)
                setTotalPages(data.totalPage)
            })
            .catch(err => console.error("Fetch error:", err));
    }, [page]);

    const filteredProducts = product.filter(p => {
        return Object.entries(filters).every(([key, value]) => {
            if (!value) return true;
            // return (p[key] || "").toLowerCase() === value.toLowerCase();
            if (Array.isArray(p[key])) {
                return p[key].map(v => v.toLowerCase()).includes(value.toLowerCase());
            }
            return (p[key] || "").toLowerCase() === value.toLowerCase();

        });
    });

    const handlechange = (value) => {
        let sortedProducts = [...product];

        if (value === "alphabeticalAZ") {
            sortedProducts.sort((a, b) => a.productname.localeCompare(b.productname));
        } else if (value === "alphabeticalZA") {
            sortedProducts.sort((a, b) => b.productname.localeCompare(a.productname));
        } else if (value === "priceLH") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === "priceHL") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (value === "newest") {
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        setaddproduct(sortedProducts);
    };

    return (
        <>
            <div className='sort-headers'>
                <div className='item1'>
                    <h3>Sort By </h3>
                    <select onChange={(e) => handlechange(e.target.value)}>
                        {/* <option value="mostRelevant">Most Relevant</option> */}
                        <option value="alphabeticalAZ">Alphabetically (A-Z)</option>
                        <option value="alphabeticalZA">Alphabetically (Z-A)</option>
                        <option value="priceLH">Price (Low-High)</option>
                        <option value="priceHL">Price (High-Low)</option>
                        <option value="newest">Newest Arrival</option>
                        {/* <option value="rated">Top Rated</option>
                        <option value="review">Most Reviewed</option> */}
                    </select>
                </div>

                <div className='item2'>
                    {/* <button onClick={() => setShowForm(true)}>Add Product</button> */}
                    <button><Link to="/admin/women/add-product">Add product</Link></button>
                </div>

            </div>
            {/* {showForm && <Addproduct onClose={() => setShowForm(false)} />} */}

            {/* <div className="collection"> */}
            {/* <h1>Shop By Men Category</h1> */}
            <div className="innercollection">
                {filteredProducts.map((key, index) => (
                    <div className="box" key={index}>
                        <Link to={`/admin/womenshow-product/${key._id}`}><div className="image_box"><img src={`http://localhost:3000/uploads/${key.image}`} alt={key.productname} />
                        </div>

                            <h4 className="image_heading">{key.productname}</h4></Link>
                        <h4 className="image_heading">Rs: {key.price}</h4>

                        <button className="edit-btn">
                            <Link to={`/admin/women/edit-product/${key._id}`}>Edit</Link>
                        </button>
                        <button className="delete-btn">
                            <Link to={`/admin/delete-product/${key._id}`}>Delete</Link>
                        </button>

                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
                <span>
                    Page <span className="active-page">{page}</span> of {totalPage}
                </span>

                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPage))} disabled={page === totalPage}>Next</button>
            </div>

            {/* </div> */}
        </>
    )
}
export default Add_data

