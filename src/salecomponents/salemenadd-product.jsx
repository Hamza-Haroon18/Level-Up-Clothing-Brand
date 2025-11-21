import './salemenadd-product.css'
import { useState, useRef } from 'react'

function Addproductmensale({ onClose }) {
    const [maincategory, setmaincategory] = useState('salemen')
    const [productname, setproductname] = useState('')
    const [price, setproductprice] = useState('')
    const [discount, setproductdiscount] = useState('')
    const [quantity, setproductquantity] = useState('')
    const [category, setproductcategory] = useState('')
    const [fabric, setproductfabric] = useState('')
    const [styling, setproductstyling] = useState('')
    const [wear, setproductwear] = useState('')
    const [trouser, setproducttrouser] = useState('')
    const [colour, setproductcolour] = useState('')
    const [season, setproductseason] = useState('')
    const [product, setproduct] = useState('')
    const [size, setproductsize] = useState('')
    const [file, setfile] = useState(null);
    const [showForm, setShowForm] = useState(false);

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
            !size ||
            !file
        ) {
            alert("Please fill in all fields");
            return;
        }
        const formData = new FormData()
        formData.append('maincategory', maincategory)
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
        // formData.append('size', size)
        size.forEach((s) => formData.append('size[]', s));

        formData.append('image', file)
        try {
            const res = await fetch('http://localhost:3000/admin/salemen/salemenadd-product', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                alert('Product added successfully!')
                window.location.href = '/admin/salemen'
            } else {
                alert('Failed to add product')
            }
        } catch (err) {
            console.error(err)
            alert('Server error')
        }
    }

    return (
        <div className="modal-overlay">
            <form className="modal-form" onSubmit={redirectsubmit}>
                <h2>Add Product</h2>

                <label>Product Name</label>
                <input type="text" onChange={(e) => setproductname(e.target.value)} required />

                <label>Price</label>
                <input type="text" onChange={(e) => setproductprice(e.target.value)} required />

                <label>Discount</label>
                <input type="text" onChange={(e) => setproductdiscount(e.target.value)} required />

                <label>Quantity</label>
                <input type="text" onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Category</label>
                <select onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select a Category</option>
                    <option value="Kurta">Kurta</option>
                    <option value="Kameez-Shalwar">Kameez Shalwar</option>
                    <option value="Waistcoat">Waistcoat</option>
                    <option value="Grooms-Sherwani">Grooms-Sherwani</option>
                    <option value="2-Piece Suit">2-Piece Suit</option>
                    <option value="3-Piece Suit">3-Piece Suit</option>
                </select>

                <label>Fabric</label>
                <select onChange={(e) => setproductfabric(e.target.value)} required>
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
                <select onChange={(e) => setproductstyling(e.target.value)} required>
                    <option value="">Select Styling</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Semi-Formal">Semi-Formal</option>
                    <option value="Embroidered">Embroidered</option>
                    <option value="Plain">Plain</option>
                </select>

                <label>Wear</label>
                <select onChange={(e) => setproductwear(e.target.value)} required>
                    <option value="">Select Wear</option>
                    <option value="Daily Wear">Daily Wear</option>
                    <option value="Partywear">Partywear</option>
                    <option value="WeddingWear">Wedding Wear</option>
                    <option value="Office Wear">Office Wear</option>
                </select>

                <label>Trouser</label>
                <select onChange={(e) => setproducttrouser(e.target.value)} required>
                    <option value="">Select Trouser</option>
                    <option value="Shalwar">Shalwar</option>
                    <option value="Straight Pants">Straight Pants</option>
                    <option value="Trouser">Trouser</option>
                    <option value="Jeans">Jeans</option>
                    <option value="No Trouser">No Trouser</option>
                </select>

                <label>Color</label>
                <select onChange={(e) => setproductcolour(e.target.value)} required>
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
                <select onChange={(e) => setproductseason(e.target.value)} required>
                    <option value="">Select a Season</option>
                    <option value="Summer Collection">Summer Collection</option>
                    <option value="Winter Collection">Winter Collection</option>
                    <option value="All-Season">All‑Season</option>
                    <option value="Festive Collection">Festive Collection</option>
                </select>

                <label>Product</label>
                <select onChange={(e) => setproduct(e.target.value)} required>
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
                <input type="file" onChange={handleChange} required />
                {file && <img src={URL.createObjectURL(file)} alt="Uploaded preview" />}

                <button type="submit">Submit</button>
                <button onClick={redirectChange}>Close</button>
            </form>
        </div>
    );
}

export default Addproductmensale;
