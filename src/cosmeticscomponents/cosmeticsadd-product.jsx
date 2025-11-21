import './cosmeticsadd-product.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addproductcosmetics() {
    const navigate = useNavigate();
    const [maincategory] = useState('cosmetics')
    const [productname, setproductname] = useState('');
    const [price, setproductprice] = useState('');
    const [quantity, setproductquantity] = useState('');
    const [category, setproductcategory] = useState('');
    const [productType, setproductType] = useState('');
    const [brand, setbrand] = useState('');
    const [skinType, setskinType] = useState('');
    const [finish, setfinish] = useState('');
    const [shade, setshade] = useState('');
    const [size, setSize] = useState([]);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const redirectsubmit = async (e) => {
        e.preventDefault();
        if (
            !productname || !price || !quantity || !category ||
            !productType || !brand || !skinType || !finish || !shade ||
            size.length === 0 || !file
        ) {
            alert("Please fill in all fields");
            return;
        }

        const formData = new FormData();
        formData.append('maincategory', maincategory)
        formData.append('productname', productname);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('category', category);
        formData.append('productType', productType);
        formData.append('brand', brand);
        formData.append('skinType', skinType);
        formData.append('finish', finish);
        formData.append('shade', shade);
        size.forEach(s => formData.append('size[]', s));
        formData.append('image', file);

        try {
            const res = await fetch('http://localhost:3000/admin/cosmetics/cosmeticsadd-product', {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                alert('Cosmetics product added successfully!');
                navigate('/admin/cosmetics');
            } else {
                alert('Failed to add product');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        }
    };

    return (
        <div className="modal-overlay">
            <form className="modal-form" onSubmit={redirectsubmit}>
                <h2>Add Cosmetics Product</h2>

                <label>Product Name</label>
                <input type="text" onChange={(e) => setproductname(e.target.value)} required />

                <label>Price</label>
                <input type="text" onChange={(e) => setproductprice(e.target.value)} required />

                <label>Quantity</label>
                <input type="text" onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Category</label>
                <select onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Haircare">Haircare</option>
                    <option value="Nailcare">Nailcare</option>
                </select>

                <label>Product Type</label>
                <select onChange={(e) => setproductType(e.target.value)} required>
                    <option value="">Select Product Type</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Lipstick">Lipstick</option>
                    <option value="Mascara">Mascara</option>
                    <option value="Eyeliner">Eyeliner</option>
                    <option value="Blush">Blush</option>
                    <option value="Face Cream">Face Cream</option>
                    <option value="Serum">Serum</option>
                    <option value="Shampoo">Shampoo</option>
                    <option value="Conditioner">Conditioner</option>
                    <option value="Nail Polish">Nail Polish</option>
                </select>

                <label>Brand</label>
                <select onChange={(e) => setbrand(e.target.value)} required>
                    <option value="">Select Brand</option>
                    <option value="Maybelline">Maybelline</option>
                    <option value="L’Oreal">L’Oreal</option>
                    <option value="MAC">MAC</option>
                    <option value="Clinique">Clinique</option>
                    <option value="Dior">Dior</option>
                    <option value="Revlon">Revlon</option>
                </select>

                <label>Skin Type</label>
                <select onChange={(e) => setskinType(e.target.value)} required>
                    <option value="">Select Skin Type</option>
                    <option value="Oily">Oily</option>
                    <option value="Dry">Dry</option>
                    <option value="Combination">Combination</option>
                    <option value="Sensitive">Sensitive</option>
                    <option value="All Skin Types">All Skin Types</option>
                </select>

                <label>Finish</label>
                <select onChange={(e) => setfinish(e.target.value)} required>
                    <option value="">Select Finish</option>
                    <option value="Matte">Matte</option>
                    <option value="Glossy">Glossy</option>
                    <option value="Natural">Natural</option>
                    <option value="Dewy">Dewy</option>
                </select>

                <label>Shade</label>
                <select onChange={(e) => setshade(e.target.value)} required>
                    <option value="">Select Shade</option>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Dark">Dark</option>
                    <option value="Universal">Universal</option>
                </select>

                <label>Size</label>
                <div className="size-checkboxes">
                    {['10ml', '30ml', '50ml', '100ml', '200ml'].map((s) => (
                        <label key={s}>
                            <input
                                type="checkbox"
                                value={s}
                                checked={size.includes(s)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSize((prev) =>
                                        e.target.checked ? [...prev, value] : prev.filter((sz) => sz !== value)
                                    );
                                }}
                            />
                            &nbsp;{s}
                        </label>
                    ))}
                </div>

                <label>Add Image</label>
                <input type="file" onChange={handleChange} required />
                {file && <img src={URL.createObjectURL(file)} alt="Uploaded preview" />}

                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate('/admin/cosmetics')}>Close</button>
            </form>
        </div>
    );
}

export default Addproductcosmetics;
