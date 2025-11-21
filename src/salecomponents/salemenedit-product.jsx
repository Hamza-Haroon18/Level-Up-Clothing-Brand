import './salemenadd-product.css'
import { useState, useRef, useEffect } from 'react'

import { useParams } from 'react-router-dom';
function Editproductmensale({ }) {
    const { id } = useParams();
    const [productname, setproductname] = useState('');
    const [price, setproductprice] = useState('');
    const [discount, setproductdiscount] = useState('')
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
        fetch(`http://localhost:3000/admin/salemen/salemenedit-product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setproductname(data.productname);
                setproductprice(data.price);
                setproductdiscount(data.discount)
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
        window.location.href = '/admin/salemen';
    };

    const redirectsubmit = async (e) => {
        setShowForm(true);
        e.preventDefault()
        if (
            !productname ||
            !price ||
            !discount ||
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
        formData.append('discount', discount)
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
            const res = await fetch(`http://localhost:3000/admin/salemen/salemenedit-product/${id}`, {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                alert('Product updated successfully!')
                window.location.href = '/admin/salemen'
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

                <label>Discount</label>
                <input type="text" value={discount} onChange={(e) => setproductdiscount(e.target.value)} required />

                <label>Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Category</label>
                <select value={category} onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select a Category</option>
                    <option value="Kurta">Kurta</option>
                    <option value="Kameez-Shalwar">Kameez Shalwar</option>
                    <option value="Waistcoat">Waistcoat</option>
                    <option value="Grooms-Sherwani">Grooms-Sherwani</option>
                    <option value="2-Piece Suit">2-Piece Suit</option>
                    <option value="3-Piece Suit">3-Piece Suit</option>
                </select>

                <label>Fabric</label>
                <select value={fabric} onChange={(e) => setproductfabric(e.target.value)} required>
                    <option value="">Select a Fabric</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Wash & Wear">Wash & Wear</option>
                    <option value="Polyester">Polyester</option>
                    <option value="linen">Linen</option>
                    <option value="Wool">Wool</option>
                    <option value="Silk Blend">Silk Blend</option>
                    <option value="Khaddar">Khaddar</option>
                </select>

                <label>Styling</label>
                <select value={styling} onChange={(e) => setproductstyling(e.target.value)} required>
                    <option value="">Select Styling</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Semi-Formal">Semi-Formal</option>
                    <option value="Embroidered">Embroidered</option>
                    <option value="Plain">Plain</option>
                </select>

                <label>Wear</label>
                <select value={wear} onChange={(e) => setproductwear(e.target.value)} required>
                    <option value="">Select Wear</option>
                    <option value="Daily Wear">Daily Wear</option>
                    <option value="Partywear">Partywear</option>
                    <option value="WeddingWear">Wedding Wear</option>
                    <option value="Office Wear">Office Wear</option>
                </select>

                <label>Trouser</label>
                <select value={trouser} onChange={(e) => setproducttrouser(e.target.value)} required>
                    <option value="">Select Trouser</option>
                    <option value="Shalwar">Shalwar</option>
                    <option value="Straight Pants">Straight Pants</option>
                    <option value="Trouser">Trouser</option>
                    <option value="Jeans">Jeans</option>
                    <option value="No Trouser">No Trouser</option>
                </select>

                <label>Color</label>
                <select value={colour} onChange={(e) => setproductcolour(e.target.value)} required>
                    <option value="">Select a Colour</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Grey">Grey</option>
                    <option value="Beige">Beige</option>
                    <option value="Pastel Shades">Pastel Shades</option>
                    <option value="Dark Tones">Dark Tones</option>
                </select>

                <label>Season</label>
                <select value={season} onChange={(e) => setproductseason(e.target.value)} required>
                    <option value="">Select a Season</option>
                    <option value="Summer Collection">Summer Collection</option>
                    <option value="Winter Collection">Winter Collection</option>
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
                    {['XS','S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((sz) => (
                        <label key={sz}>
                            <input
                                type="checkbox"
                                value={sz}
                                checked={size.includes(sz)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setproductsize((prev) =>
                                        e.target.checked ? [...prev, value] : prev.filter((s) => s !== value)
                                    );
                                }}
                            />
                            &nbsp;{sz.toUpperCase()}
                        </label>
                    ))}
                </div>

                <label>Add Image</label>
                <input type="file" onChange={handleChange} />

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

export default Editproductmensale;
