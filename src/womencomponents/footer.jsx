import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

function Footer() {
    return (
        <>
            <div className="footers">
                <ul>
                    <li>CONTACT US</li>
                    <li><FontAwesomeIcon icon={faPhone} /> +92 21 111-244-266</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> info@bonanzasatrangi.com</li>
                    <li>
                        <FontAwesomeIcon icon={faClock} /> Customer Care <br /> Monday - Sunday <br /> 24/7
                    </li>
                </ul>


                <ul>
                    <li>INFORMATION</li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/admin/order-history">Manage Orders</Link></li>
                    <li><Link to="/shipping">Shipping Information</Link></li>
                    <li><Link to="/location">Store Locator</Link></li>
                    <li><Link to="/service">Terms of Service</Link></li>
                </ul>

                <ul>
                    <li>CUSTOMER CARE</li>
                    <li><Link to="/message">Contact Us</Link></li>
                    <li><Link to="/policy">Privacy Policy</Link></li>
                    <li><Link to="/return">Return & Exchange Policy</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                </ul>

                <ul>
                    <li>NEWSLETTER SIGN UP</li>
                    <li>Sign up to stay in the loop. Receive updates, access to exclusive deals and more.</li>
                    <li><input type="text" placeholder='Enter Email' /></li>
                </ul>

            </div>
        </>
    )
}
export default Footer