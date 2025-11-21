import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import SearchBar from './search.jsx'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Header() {
    const navigate = useNavigate();
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
            <div className="headers">
                <div className="image-logo">
                    <img src="/logo1.jpg" alt="Logo" />
                </div>
                <div className="search">
                    {/* <input type="text" placeholder="Search clothes..." />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /> */}
                    <SearchBar />
                </div>
                <div className="home">
                    <Link to="/home">Home</Link>
                    <select
                        className="dropdown"
                        onChange={(e) => {
                            if (e.target.value) {
                                navigate(e.target.value);
                            }
                        }}
                    >
                        <option value="">Categories</option>
                        <option value="/admin/men">Men</option>
                        <option value="/admin/women">Women</option>
                        <option value="/admin/kid">Kids</option>
                        <option value="/admin/frag">Fragrances</option>
                    </select>

                    <Link to="/message">Contact Us</Link>
                    <Link to="/admin/order-history"><FontAwesomeIcon icon={faFolderOpen} /> Order History</Link>
                    <Link onClick={handleLogout}>Logout</Link>
                    {/* <p>
                        <FontAwesomeIcon icon={faShoppingCart} /> Cart
                    </p> */}
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

export default Header
