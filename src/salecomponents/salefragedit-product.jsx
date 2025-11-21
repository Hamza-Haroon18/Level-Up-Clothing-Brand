import './salefragadd-product.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Editproductfragsale() {
    const { id } = useParams();
    const [productname, setproductname] = useState('');
    const [price, setproductprice] = useState('');
    const [discount, setproductdiscount] = useState('')
    const [quantity, setproductquantity] = useState('');
    const [category, setproductcategory] = useState('');
    const [fragranceType, setFragranceType] = useState('');
    const [gender, setGender] = useState('');
    const [occasion, setOccasion] = useState('');
    const [longevity, setLongevity] = useState('');
    const [volume, setVolume] = useState([]);
    const [file, setFile] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/admin/salefrag/salefragedit-product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setproductname(data.productname);
                setproductprice(data.price);
                setproductdiscount(data.discount)
                setproductquantity(data.quantity);
                setproductcategory(data.category);
                setFragranceType(data.fragranceType);
                setGender(data.gender);
                setOccasion(data.occasion);
                setLongevity(data.longevity);
                setVolume(data.volume || []);
                setExistingImage(`http://localhost:3000/uploads/${data.image}`);
            })
            .catch((err) => console.error("Error loading product:", err));
    }, [id]);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const redirectChange = () => {
        window.location.href = '/admin/salefrag';
    };

    const redirectsubmit = async (e) => {
        e.preventDefault();
        if (
            !productname || !price ||!discount || !quantity || !category || !fragranceType || !gender ||
            !occasion || !longevity || volume.length === 0
        ) {
            alert("Please fill in all fields");
            return;
        }

        const formData = new FormData();
        formData.append('productname', productname);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('quantity', quantity);
        formData.append('category', category);
        formData.append('fragranceType', fragranceType);
        formData.append('gender', gender);
        formData.append('occasion', occasion);
        formData.append('longevity', longevity);
        volume.forEach(v => formData.append('volume[]', v));
        if (file) formData.append('image', file);

        try {
            const res = await fetch(`http://localhost:3000/admin/salefrag/salefragedit-product/${id}`, {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                alert('Product updated successfully!');
                window.location.href = '/admin/salefrag';
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
                <h2>Update Fragrance Product</h2>

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
                    <option value="">Select Category</option>
                    <option value="Perfume">Perfume</option>
                    <option value="Body Spray">Body Spray</option>
                    <option value="Attar">Attar</option>
                    <option value="Cologne">Cologne</option>
                    <option value="Deodorant">Deodorant</option>
                </select>

                <label>Fragrance Type</label>
                <select value={fragranceType} onChange={(e) => setFragranceType(e.target.value)} required>
                    <option value="">Select Type</option>
                    <option value="Floral">Floral</option>
                    <option value="Woody">Woody</option>
                    <option value="Oriental">Oriental</option>
                    <option value="Fresh">Fresh</option>
                    <option value="Citrus">Citrus</option>
                    <option value="Spicy">Spicy</option>
                    <option value="Fruity">Fruity</option>
                    <option value="Aquatic">Aquatic</option>
                </select>

                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Unisex">Unisex</option>
                </select>

                <label>Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option value="">Select Occasion</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Evening Wear">Evening Wear</option>
                    <option value="Daily Use">Daily Use</option>
                    <option value="Gift">Gift</option>
                </select>

                <label>Longevity</label>
                <select value={longevity} onChange={(e) => setLongevity(e.target.value)} required>
                    <option value="">Select Longevity</option>
                    <option value="Short (1–2 hrs)">Short (1–2 hrs)</option>
                    <option value="Moderate (3–6 hrs)">Moderate (3–6 hrs)</option>
                    <option value="Long Lasting (7+ hrs)">Long Lasting (7+ hrs)</option>
                </select>

                {/* <label>Product Form</label>
                <select value={productForm} onChange={(e) => setProductForm(e.target.value)} required>
                    <option value="">Select Form</option>
                    <option value="spray">Spray</option>
                    <option value="rollon">Roll-on</option>
                    <option value="solid">Solid Perfume</option>
                    <option value="oil">Oil-based</option>
                </select> */}

                <label>Volume (ml)</label>
                <div className="size-checkboxes">
                    {['10ml', '30ml', '50ml', '75ml', '100ml', '150ml'].map((v) => (
                        <label key={v}>
                            <input
                                type="checkbox"
                                value={v}
                                checked={volume.includes(v)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setVolume((prev) =>
                                        e.target.checked ? [...prev, value] : prev.filter((vol) => vol !== value)
                                    );
                                }}
                            />
                            &nbsp;{v}
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

export default Editproductfragsale;
