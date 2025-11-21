import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

function FooterUser() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>CONTACT US</li>
                    <li><FontAwesomeIcon icon={faPhone} /> +92 21 111-244-266</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> info@LevelUp.com</li>
                    <li>
                        <FontAwesomeIcon icon={faClock} /> Customer Care <br /> Monday - Sunday <br /> 24/7
                    </li>
                </ul>


                <ul>
                    <li>INFORMATION</li>
                    <li><Link to="/aboutuser">About Us</Link></li>
                    <li><Link to="/track">Track Your Order</Link></li>
                    <li><Link to="/shippinguser">Shipping Information</Link></li>
                    <li><Link to="/locationuser">Store Locator</Link></li>
                    <li><Link to="/serviceuser">Terms of Service</Link></li>
                </ul>

                <ul>
                    <li>CUSTOMER CARE</li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/policyuser">Privacy Policy</Link></li>
                    <li><Link to="/returnuser">Return & Exchange Policy</Link></li>
                    <li><Link to="/faqsuser">FAQs</Link></li>
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
export default FooterUser