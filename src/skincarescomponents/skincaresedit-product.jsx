import './skincaresadd-product.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Editproductskincares() {
    const { id } = useParams();
    const [productname, setproductname] = useState('');
    const [price, setproductprice] = useState('');
    const [quantity, setproductquantity] = useState('');
    const [category, setproductcategory] = useState('');
    const [productType, setproductType] = useState('');
    const [brand, setbrand] = useState('');
    const [skinType, setskinType] = useState('');
    const [concern, setconcern] = useState('');
    const [size, setsize] = useState([]);
    const [file, setFile] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/admin/skincares/skincaresedit-product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setproductname(data.productname);
                setproductprice(data.price);
                setproductquantity(data.quantity);
                setproductcategory(data.category);
                setproductType(data.productType);
                setbrand(data.brand);
                setskinType(data.skinType);
                setconcern(data.concern);
                setsize(data.size || []);
                setExistingImage(`http://localhost:3000/uploads/${data.image}`);
            })
            .catch((err) => console.error("Error loading product:", err));
    }, [id]);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const redirectChange = () => {
        window.location.href = '/admin/skincares';
    };

    const redirectsubmit = async (e) => {
        e.preventDefault();
        if (!productname || !price || !quantity || !category || !productType || !brand || !skinType || !concern || size.length === 0) {
            alert("Please fill in all fields");
            return;
        }

        const formData = new FormData();
        formData.append('productname', productname);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('category', category);
        formData.append('productType', productType);
        formData.append('brand', brand);
        formData.append('skinType', skinType);
        formData.append('concern', concern);
        size.forEach(s => formData.append('size[]', s));
        if (file) formData.append('image', file);

        try {
            const res = await fetch(`http://localhost:3000/admin/skincares/skincaresedit-product/${id}`, {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                alert('Product updated successfully!');
                window.location.href = '/admin/skincares';
            } else {
                alert('Failed to update product');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        }
    };

    return (
        <div className="modal-overlay">
            <form className="modal-form" onSubmit={redirectsubmit}>
                <h2>Update Skincare Product</h2>

                <label>Product Name</label>
                <input type="text" value={productname} onChange={(e) => setproductname(e.target.value)} required />

                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setproductprice(e.target.value)} required />

                <label>Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setproductquantity(e.target.value)} required />

                <label>Category</label>
                <select value={category} onChange={(e) => setproductcategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Skincare">Skincare</option>
                </select>

                <label>Product Type</label>
                <select value={productType} onChange={(e) => setproductType(e.target.value)} required>
                    <option value="">Select Type</option>
                    <option value="Face Wash">Face Wash</option>
                    <option value="Moisturizer">Moisturizer</option>
                    <option value="Serum">Serum</option>
                    <option value="Sunscreen">Sunscreen</option>
                    <option value="Toner">Toner</option>
                    <option value="Face Mask">Face Mask</option>
                </select>

                <label>Brand</label>
                <select value={brand} onChange={(e) => setbrand(e.target.value)} required>
                    <option value="">Select Brand</option>
                    <option value="Clinique">Clinique</option>
                    <option value="The Ordinary">The Ordinary</option>
                    <option value="CeraVe">CeraVe</option>
                    <option value="Neutrogena">Neutrogena</option>
                    <option value="La Roche-Posay">La Roche-Posay</option>
                </select>

                <label>Skin Type</label>
                <select value={skinType} onChange={(e) => setskinType(e.target.value)} required>
                    <option value="">Select Skin Type</option>
                    <option value="Oily">Oily</option>
                    <option value="Dry">Dry</option>
                    <option value="Combination">Combination</option>
                    <option value="Sensitive">Sensitive</option>
                    <option value="All Skin Types">All Skin Types</option>
                </select>

                <label>Concern</label>
                <select value={concern} onChange={(e) => setconcern(e.target.value)} required>
                    <option value="">Select Concern</option>
                    <option value="Acne">Acne</option>
                    <option value="Aging">Aging</option>
                    <option value="Dark Spots">Dark Spots</option>
                    <option value="Hydration">Hydration</option>
                    <option value="Pores">Pores</option>
                </select>

                <label>Available Sizes</label>
                <div className="size-checkboxes">
                    {['30ml', '50ml', '100ml', '200ml'].map((s) => (
                        <label key={s}>
                            <input
                                type="checkbox"
                                value={s}
                                checked={size.includes(s)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setsize((prev) =>
                                        e.target.checked ? [...prev, value] : prev.filter((sz) => sz !== value)
                                    );
                                }}
                            />
                            &nbsp;{s}
                        </label>
                    ))}
                </div>

                <label>Image</label>
                <input type="file" onChange={handleChange} />
                {file ? (
                    <img src={URL.createObjectURL(file)} alt="New uploaded preview" />
                ) : existingImage ? (
                    <img src={existingImage} alt="Existing product" />
                ) : null}

                <button type="submit">Update</button>
                <button type="button" onClick={redirectChange}>Cancel</button>
            </form>
        </div>
    );
}

export default Editproductskincares;
