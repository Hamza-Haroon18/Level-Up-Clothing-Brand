import './kidadd-product.css'
import { useState, useRef } from 'react'

function Addproductkid({ onClose }) {
    const [maincategory, setmaincategory] = useState('kid')
    const [productname, setproductname] = useState('')
    const [price, setproductprice] = useState('')
    const [quantity, setproductquantity] = useState('')
    const [category, setproductcategory] = useState('')
    const [gender, setproductgender] = useState('')
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
        window.location.href = '/admin/kid';
    };

    const redirectsubmit = async (e) => {
        setShowForm(true);
        e.preventDefault()
        if (
            !productname ||
            !price ||
            !quantity ||
            !gender ||
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
        formData.append('quantity', quantity)
        formData.append('gender', gender)
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
            const res = await fetch('http://localhost:3000/admin/kid/kidadd-product', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                alert('Product added successfully!')
                window.location.href = '/admin/kid'
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

                <label>Quantity</label>
                <input type="text" onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Gender</label>
                <select onChange={(e) => setproductgender(e.target.value)} required>
                    <option value="">Select a Gender</option>
                    <option value="Kid-Boys">Kid-Boys</option>
                    <option value="Kid-Girls">Kid-Girls</option>
                    <option value="Teen-Boys">Teen-Boys</option>
                    <option value="Teen-Girls">Teen-Girls</option>
                </select>

                <label>Category</label>
                <select onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select a Category</option>
                    <option value="Frock">Frock</option>
                    <option value="Shirt & Shorts">Shirt & Shorts</option>
                    <option value="Romper">Romper</option>
                    <option value="Jumpsuit">Jumpsuit</option>
                    <option value="Waistcoat Set">Waistcoat Set</option>
                    <option value="Kurta Pajama">Kurta Pajama</option>
                </select>

                <label>Fabric</label>
                <select onChange={(e) => setproductfabric(e.target.value)} required>
                    <option value="">Select a Fabric</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Lawn">Lawn</option>
                    <option value="Denim">Denim</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Linen">Linen</option>
                    <option value="Silk Blend">Silk Blend</option>
                    <option value="Khaddar">Khaddar</option>
                </select>

                <label>Styling</label>
                <select onChange={(e) => setproductstyling(e.target.value)} required>
                    <option value="">Select Styling</option>
                    <option value="Casual">Casual</option>
                    <option value="Party">Party</option>
                    <option value="Fancy">Fancy</option>
                    <option value="Printed">Printed</option>
                    <option value="Cartoon-Themed">Cartoon-Themed</option>
                </select>

                <label>Wear</label>
                <select onChange={(e) => setproductwear(e.target.value)} required>
                    <option value="">Select Wear</option>
                    <option value="Playwear">Playwear</option>
                    <option value="Partywear">Partywear</option>
                    <option value="Festive Wear">Festive Wear</option>
                    <option value="Sleepwear">Sleepwear</option>
                </select>

                <label>Trouser</label>
                <select onChange={(e) => setproducttrouser(e.target.value)} required>
                    <option value="">Select Trouser</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Tights">Tights</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Pajama">Pajama</option>
                    <option value="No Trouser">No Trouser</option>
                </select>

                <label>Color</label>
                <select onChange={(e) => setproductcolour(e.target.value)} required>
                    <option value="">Select a Colour</option>
                    <option value="Pink">Pink</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="White">White</option>
                    <option value="Multicolor">Multicolor</option>
                    <option value="Pastels">Pastels</option>
                    <option value="Brights">Brights</option>
                </select>

                <label>Season</label>
                <select onChange={(e) => setproductseason(e.target.value)} required>
                    <option value="">Select a Season</option>
                    <option value="Summer">Summer Collection</option>
                    <option value="Winter">Winter Collection</option>
                    <option value="All-season">All‑Season</option>
                    <option value="Festive Collection">Festive Collection</option>
                </select>

                <label>Product</label>
                <select onChange={(e) => setproduct(e.target.value)} required>
                    <option value="">Select a Product</option>
                    <option value="Stitched">Stitched</option>
                    <option value="Unstitched">Unstitched</option>
                    <option value="Ready-to-Wear">Ready‑to‑Wear</option>
                </select>

                <label>Size</label>
                <div className="size-checkboxes">
                    {['0-1Y', '1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-9Y', '9-10Y'].map((sz) => (
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

export default Addproductkid;
