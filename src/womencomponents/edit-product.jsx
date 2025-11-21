import './add-product.css'
import { useState, useRef, useEffect } from 'react'

import { useParams } from 'react-router-dom';
function Editproduct({ }) {
    const { id } = useParams();
    const [productname, setproductname] = useState('');
    const [price, setproductprice] = useState('');
    const [quantity, setproductquantity] = useState('');
    const [category, setproductcategory] = useState('');
    const [fabric, setproductfabric] = useState('');
    const [styling, setproductstyling] = useState('');
    const [wear, setproductwear] = useState('');
    const [trouser, setproducttrouser] = useState('');
    const [colour, setproductcolour] = useState('');
    const [season, setproductseason] = useState('');
    const [product, setproduct] = useState('');
    const [size, setproductsize] = useState('');
    const [file, setfile] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [existingImage, setExistingImage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/admin/women/edit-product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setproductname(data.productname);
                setproductprice(data.price);
                setproductquantity(data.quantity);
                setproductcategory(data.category);
                setproductfabric(data.fabric);
                setproductstyling(data.styling);
                setproductwear(data.wear);
                setproducttrouser(data.trouser);
                setproductcolour(data.color);
                setproductseason(data.season);
                setproduct(data.productType);
                setproductsize(data.size);
                setExistingImage(`http://localhost:3000/uploads/${data.image}`);
            })
            .catch((err) => console.error("Error loading product:", err));
    }, [id]);

    const handleChange = (e) => {
        setfile(e.target.files[0]);
    };

    const redirectChange = () => {
        window.location.href = '/admin/women';
    };

    const redirectsubmit = async (e) => {
        setShowForm(true);
        e.preventDefault()
        if (
            !productname ||
            !price ||
            !quantity ||
            !category ||
            !fabric ||
            !styling ||
            !wear ||
            !trouser ||
            !colour ||
            !season ||
            !product ||
            !size 
            // || !file
        ) {
            alert("Please fill in all fields");
            return;
        }
        const formData = new FormData()
        formData.append('productname', productname)
        formData.append('price', price)
        formData.append('quantity', quantity)
        formData.append('category', category)
        formData.append('fabric', fabric)
        formData.append('styling', styling)
        formData.append('wear', wear)
        formData.append('trouser', trouser)
        formData.append('color', colour)
        formData.append('season', season)
        formData.append('productType', product)
        size.forEach((s) => formData.append('size[]', s));
        if (file) {
  formData.append('image', file); 
}
        // formData.append('image', file)
        try {
            const res = await fetch(`http://localhost:3000/admin/women/edit-product/${id}`, {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                alert('Product updated successfully!')
                window.location.href = '/admin/women'
            } else {
                alert('Failed to add product')
            }
        } catch (err) {
            console.error(err)
            // alert('Server error')
        }
    }

    return (
        <div className="modal-overlay">
            <form className="modal-form" onSubmit={redirectsubmit}>
                <h2>Update Product</h2>

                <label>Product Name</label>
                <input type="text" value={productname} onChange={(e) => setproductname(e.target.value)} required />

                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setproductprice(e.target.value)} required />

                <label>Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Category</label>
                <select value={category} onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select a category</option>
                    <option value="1-Piece">1-Piece</option>
                    <option value="2-Piece">2-Piece</option>
                    <option value="3-Piece">3-Piece</option>
                </select>

                <label>Fabric</label>
                <select value={fabric} onChange={(e) => setproductfabric(e.target.value)} required>
                    <option value="">Select a Fabric</option>
                    <option value="Lawn">Lawn</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Linen">Linen</option>
                    <option value="Chiffon">Chiffon</option>
                    <option value="Raw Silk">Raw Silk</option>
                    <option value="Khadder">Khadder</option>
                    <option value="Silk">Silk</option>
                    <option value="Dobby">Dobby</option>
                    <option value="Handwoven">Handwoven</option>
                </select>

                <label>Styling</label>
                <select value={styling} onChange={(e) => setproductstyling(e.target.value)} required>
                    <option value="">Select Styling</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Printed">Printed</option>
                    <option value="Embroidered">Embroidered</option>
                </select>

                <label>Wear</label>
                <select value={wear} onChange={(e) => setproductwear(e.target.value)} required>
                    <option value="">Select Wear</option>
                    <option value="Casual">Casual</option>
                    <option value="Partywear">Partywear</option>
                    <option value="Festive">Festive</option>
                    <option value="Office Wear">Office Wear</option>
                </select>

                <label>Trouser</label>
                <select value={trouser} onChange={(e) => setproducttrouser(e.target.value)} required>
                    <option value="">Select Trouser</option>
                    <option value="No Trouser">No Trouser</option>
                    <option value="Dyed Trouser">Dyed Trouser</option>
                    <option value="Printed Trouser">Printed Trouser</option>
                    <option value="Embroidered Trouser">Embroidered Trouser</option>
                    <option value="Plain Trouser">Plain Trouser</option>
                </select>

                <label>Color</label>
                <select value={colour} onChange={(e) => setproductcolour(e.target.value)} required>
                    <option value="">Select a Colour</option>
                    <option value="Pastels">Pastels</option>
                    <option value="Brights">Brights</option>
                    <option value="Neutrals">Neutrals</option>
                    <option value="Dark Shades">Dark Shades</option>
                    <option value="Multicolor">Multicolor</option>
                </select>

                <label>Season</label>
                <select value={season} onChange={(e) => setproductseason(e.target.value)} required>
                    <option value="">Select a Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="All-Season">All‑Season</option>
                    <option value="Festive Collection">Festive Collection</option>
                </select>

                <label>Product</label>
                <select value={product} onChange={(e) => setproduct(e.target.value)} required>
                    <option value="">Select a Product</option>
                    <option value="Stitched">Stitched</option>
                    <option value="Unstitched">Unstitched</option>
                    <option value="Ready‑to‑Wear">Ready‑to‑Wear</option>
                </select>

                <label>Size</label>
                <div className="size-checkboxes">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                        <label key={sz} >
                            <input
                                type="checkbox"
                                value={sz}
                                checked={size.includes(sz)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setproductsize((prev) =>
                                        e.target.checked
                                            ? [...prev, value]
                                            : prev.filter((s) => s !== value)
                                    );
                                }}
                            />
                            &nbsp;{sz.toUpperCase()}
                        </label>
                    ))}
                </div>

                <label>Add Image</label>
                <input type="file" onChange={handleChange}  />

                {file ? (
                    <img src={URL.createObjectURL(file)} alt="New uploaded preview" />
                ) : existingImage ? (
                    <img src={existingImage} alt="Existing image" />
                ) : null}

                {/* {file && <img src={URL.createObjectURL(file)} alt="Uploaded preview" />} */}

                <button type="submit">Submit</button>
                <button onClick={redirectChange}>Close</button>
            </form>
        </div>
    );
}

export default Editproduct;
