import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SearchBaruser from './search'

function HeaderUser() {
    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const email = sessionStorage.getItem("userEmail");
        if (!email) {
            alert("Please log in to view your cart.");
            navigate("/login");
            return;
        }

        setUserEmail(email);

        const storedCart = localStorage.getItem(`cart_${email}`);
        setCart(storedCart ? JSON.parse(storedCart) : []);
    }, [navigate]);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalAmount(total);
    }, [cart]);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        if (userEmail) {
            localStorage.setItem(`cart_${userEmail}`, JSON.stringify(updatedCart));
        }
    };
    useEffect(() => {
        const updateCartFromStorage = () => {
            const storedCart = localStorage.getItem(`cart_${userEmail}`);
            setCart(storedCart ? JSON.parse(storedCart) : []);
        };

        // Listen for custom event
        window.addEventListener('cartUpdated', updateCartFromStorage);

        // Cleanup listener
        return () => window.removeEventListener('cartUpdated', updateCartFromStorage);
    }, [userEmail]);


    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:3000/logout", {
                method: "GET",
                credentials: "include",
            });

            if (response.redirected) {
                navigate("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    // const image = ['image-1.avif', 'image-2.jpg', 'image-3.jpg', 'image-4.webp']
    // const [currentimage, setcurrentimage] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setcurrentimage((prevIndex) =>
    //             prevIndex === image.length - 1 ? 0 : prevIndex + 1);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [])

    // const nextSlide = () => {
    //     setcurrentimage((prevIndex) =>
    //         prevIndex === image.length - 1 ? 0 : prevIndex + 1);
    // };

    // const prevSlide = () => {
    //     setcurrentimage((prevIndex) =>
    //         prevIndex === image.length - 1 ? 0 : prevIndex - 1);
    // };

    return (
        <>
            <div className="header">
                <div className="image-logo">
                    <img src="/logo1.jpg" alt="Logo" />
                </div>
                <div className="search">
                    {/* <input type="text" placeholder="Search clothes..." />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /> */}
                    <SearchBaruser />
                </div>
                <div className="home">
                    <Link to="/">Home</Link>
                    <select
                        className="dropdown"
                        onChange={(e) => {
                            if (e.target.value) {
                                navigate(e.target.value);
                            }
                        }}
                    >
                        <option value="">Categories</option>
                        <option value="/men">Men</option>
                        <option value="/women">Women</option>
                        <option value="/kid">Kids</option>
                        <option value="/frag">Fragrances</option>
                    </select>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/cart" className="cart-link">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Cart
                        <span className="cart-count">{cart.length}</span>
                    </Link>
                    <Link onClick={handleLogout}>Logout</Link>
                </div>
            </div>

            {/* <div className="slider">
                <img src={image[currentimage]} alt="Slider" />
                <div className="slider-buttons">
                    <button onClick={prevSlide}><FontAwesomeIcon icon={faLessThan} /></button>
                    <button onClick={nextSlide}><FontAwesomeIcon icon={faGreaterThan} /></button>
                </div>
            </div> */}
        </>
    )
}

export default HeaderUser
