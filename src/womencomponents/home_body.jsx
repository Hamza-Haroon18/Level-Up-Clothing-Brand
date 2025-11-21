import './home_bodyadmins.css'
import { Link } from 'react-router-dom';
function Home_body() {
    return (
        <>
            <div className="arrival">
                <h1 className="heading">New Arrival</h1>
                <div className="inner-arrival">
                    <Link to="/admin/women" className="card-link">
                        <div className="card">
                            <h2>Women</h2>
                        </div>
                    </Link>

                    <Link to="/admin/men" className="card-link">
                        <div className="card">
                            <h2>Men</h2>
                        </div>
                    </Link>

                    <Link to="/admin/kid" className="card-link">
                        <div className="card">
                            <h2>Kids</h2>
                        </div>
                    </Link>

                    <Link to="/admin/frag" className="card-link">
                        <div className="card">
                            <h2>Fragnance</h2>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="collections">
                <h1>Season’s Highlights</h1>
                <div className="innercollection">
                    <Link to="/admin/salewomen">
                        <div className="adminbox">
                            <div className="image_box"><img src="/cloth1.webp" alt="" /></div>
                            <h4 className="image_heading">Women’s Bestsellers</h4>
                            <p className="image_description">Discover stylish women’s fashion at irresistible discounts—upgrade your wardrobe today!</p>
                        </div>
                    </Link>

                    <Link to="/admin/salemen">
                        <div className="adminbox">
                            <div className="image_box"><img src="/cloth2.webp" alt="" /></div>
                            <h4 className="image_heading">Gentleman’s Picks</h4>
                            <p className="image_description">Upgrade wardrobe with the latest trends and exclusive deals—Level Up Your Wardrobe Today!</p>
                        </div></Link>

                    <Link to="/admin/salekid">
                        <div className="adminbox">
                            <div className="image_box"><img src="/cloth3.webp" alt="" /></div>
                            <h4 className="image_heading">Little Fashionistas</h4>
                            <p className="image_description">Cute, comfy, and trendy outfits for your little ones—shop the collection now!</p>
                        </div></Link>
                    <Link to="/admin/salefrag">
                        <div className="adminbox">
                            <div className="image_box"><img src="/cloth5.webp" alt="" /></div>
                            <h4 className="image_heading">Scented Elegance</h4>
                            <p className="image_description">Discover premium fragrances at irresistible prices—your signature scent awaits!</p>
                        </div></Link>
                </div>
            </div>

            <div className="collections">
                <h1>Shop By Men Category</h1>
                <div className="innercollection">
                    <Link to="/admin/men?category=Kameez-Shalwar">
                        <div className="adminbox">
                            <div className="image_box"><img src="/men1.webp" alt="" /></div>
                            <h4 className="image_heading">Kameez Shalwar</h4>
                        </div></Link>
                    <Link to="/admin/men?category=Kurta">
                        <div className="adminbox">
                            <div className="image_box"><img src="/men2.webp" alt="" /></div>
                            <h4 className="image_heading">Kurta</h4>
                        </div></Link>
                    <Link to="/admin/men?category=Waistcoat">
                        <div className="adminbox">
                            <div className="image_box"><img src="/men3.webp" alt="" /></div>
                            <h4 className="image_heading">Waistcoat</h4>
                        </div></Link>
                    <Link to="/admin/men?category=Grooms-Sherwani">
                        <div className="adminbox">
                            <div className="image_box"><img src="/men4.webp" alt="" /></div>
                            <h4 className="image_heading">Grooms-Sherwani</h4>
                        </div></Link>
                </div>
            </div>

            <div className="collections">
                <h1>Shop By Women Category</h1>
                <div className="innercollection">
                    <Link to="/admin/women?productType=Unstitched">
                        <div className="adminbox">
                            <div className="image_box"><img src="/women1.webp" alt="" /></div>
                            <h4 className="image_heading">Unstitched</h4>
                        </div></Link>
                    <Link to="/admin/women?productType=Stitched">
                        <div className="adminbox">
                            <div className="image_box"><img src="/women2.webp" alt="" /></div>
                            <h4 className="image_heading">Stitched</h4>
                        </div></Link>
                    <Link to="/admin/women?category=1-piece">
                        <div className="adminbox">
                            <div className="image_box"><img src="/women3.webp" alt="" /></div>
                            <h4 className="image_heading">Kurti</h4>
                        </div></Link>
                    <Link to="/admin/women?styling=Embroidered">
                        <div className="adminbox">
                            <div className="image_box"><img src="/women4.webp" alt="" /></div>
                            <h4 className="image_heading">Embroidered</h4>
                        </div></Link>
                </div>
            </div>

            <div className="collections">
                <h1>Shop By Fragnaces & Cosmetics</h1>
                <div className="innercollection">
                    <Link to="/admin/frag?gender=Men">
                        <div className="adminbox">
                            <div className="image_box"><img src="/frag1.webp" alt="" /></div>
                            <h4 className="image_heading">Men Fragnance</h4>
                        </div></Link>
                    <Link to="/admin/frag?gender=Women">
                        <div className="adminbox">
                            <div className="image_box"><img src="/frag2.webp" alt="" /></div>
                            <h4 className="image_heading">Women Fragnance</h4>
                        </div></Link>
                        <Link to="/admin/cosmetics">
                    <div className="adminbox">
                        <div className="image_box"><img src="/frag3.webp" alt="" /></div>
                        <h4 className="image_heading">Cosmetics</h4>
                    </div></Link>
                    <Link to="/admin/skincares">
                    <div className="adminbox">
                        <div className="image_box"><img src="/frag4.webp" alt="" /></div>
                        <h4 className="image_heading">Skin Cares</h4>
                    </div></Link>
                </div>
            </div>

            <div className="collections">
                <h1>Shop By Boys & Girls Category</h1>
                <div className="innercollection">
                    <Link to="/admin/kid?gender=Teen-Girls">
                        <div className="adminbox">
                            <div className="image_box"><img src="/teen1.webp" alt="" /></div>
                            <h4 className="image_heading">Teen Girls</h4>
                        </div></Link>
                    <Link to="/admin/kid?gender=Teen-Boys">
                        <div className="adminbox">
                            <div className="image_box"><img src="/teen2.webp" alt="" /></div>
                            <h4 className="image_heading">Teen Boys</h4>
                        </div></Link>
                    <Link to="/admin/kid?gender=Kid-Girls">
                        <div className="adminbox">
                            <div className="image_box"><img src="/teen3.webp" alt="" /></div>
                            <h4 className="image_heading">Kid Girls</h4>
                        </div></Link>
                    <Link to="/admin/kid?gender=Kid-Boys">
                        <div className="adminbox">
                            <div className="image_box"><img src="/teen4.webp" alt="" /></div>
                            <h4 className="image_heading">Kid Boys</h4>
                        </div></Link>
                </div>
            </div>
        </>
    )
}
export default Home_body