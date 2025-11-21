import './home_body.css'
import { Link } from 'react-router-dom';
function Home_body() {
    return (
        <>
            <div className="arrival">
                <h1 className="heading">New Arrival</h1>
                <div className="inner-arrival">
                     <Link to="/women" className="card-link">
                        <div className="card">
                            <h2>Women</h2>
                        </div>
                    </Link>

                    <Link to="/men" className="card-link">
                        <div className="card">
                            <h2>Men</h2>
                        </div>
                    </Link>

                    <Link to="/kid" className="card-link">
                        <div className="card">
                            <h2>Kids</h2>
                        </div>
                    </Link>

                    <Link to="/frag" className="card-link">
                        <div className="card">
                            <h2>Fragnance</h2>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="user_collection">
                <h1>Season’s Highlights</h1>
                    <div className="innercollection">
                        <Link to="/salewomen">
                        <div className="userbox">
                            <div className="image_box"><img src="/cloth1.webp" alt="" /></div>
                            <h4 className="img_heading">Women’s Bestsellers</h4>
                            <p className="image_description">Discover stylish women’s fashion at irresistible discounts—upgrade your wardrobe today!</p>
                        </div>
                        </Link>

                        <Link to="/salemen">
                        <div className="userbox">
                            <div className="image_box"><img src="/cloth2.webp" alt="" /></div>
                            <h4 className="img_heading">Gentleman’s Picks</h4>
                            <p className="image_description">Upgrade wardrobe with the latest trends and exclusive deals—Level Up Your Wardrobe Today!</p>
                        </div></Link>

                        <Link to="/salekid">
                        <div className="userbox">
                            <div className="image_box"><img src="/cloth3.webp" alt="" /></div>
                            <h4 className="img_heading">Little Fashionistas</h4>
                            <p className="image_description">Cute, comfy, and trendy outfits for your little ones—shop the collection now!</p>
                        </div></Link>
                        <Link to="/salefrag">
                        <div className="userbox">
                            <div className="image_box"><img src="/cloth5.webp" alt="" /></div>
                            <h4 className="img_heading">Scented Elegance</h4>
                            <p className="image_description">Discover premium fragrances at irresistible prices—your signature scent awaits!</p>
                        </div></Link>
                    </div>
            </div>

            <div className="user_collection">
                <h1>Shop By Men Category</h1>
                    <div className="innercollection">
                        <Link to="/men?category=Kameez-Shalwar">
                        <div className="userbox">
                            <div className="image_box"><img src="/men1.webp" alt="" /></div>
                            <h4 className="img_heading">Kameez Shalwar</h4>
                        </div></Link>
                        <Link to="/men?category=Kurta">
                        <div className="userbox">
                            <div className="image_box"><img src="/men2.webp" alt="" /></div>
                            <h4 className="img_heading">Kurta</h4>
                        </div></Link>
                        <Link to="/men?category=Waistcoat">
                        <div className="userbox">
                            <div className="image_box"><img src="/men3.webp" alt="" /></div>
                            <h4 className="img_heading">Waistcoat</h4>
                        </div></Link>
                        <Link to="/men?category=Grooms-Sherwani">
                        <div className="userbox">
                            <div className="image_box"><img src="/men4.webp" alt="" /></div>
                            <h4 className="img_heading">Grooms-Sherwani</h4>
                        </div></Link>
                    </div>
            </div>

            <div className="user_collection">
                <h1>Shop By Women Category</h1>
                    <div className="innercollection">
                        <Link to="/women?productType=Unstitched">
                        <div className="userbox">
                            <div className="image_box"><img src="/women1.webp" alt="" /></div>
                            <h4 className="img_heading">Unstitched</h4>
                        </div></Link>
                        <Link to="/women?productType=Stitched">
                        <div className="userbox">
                            <div className="image_box"><img src="/women2.webp" alt="" /></div>
                            <h4 className="img_heading">Stitched</h4>
                        </div></Link>
                        <Link to="/women?category=1-piece">
                        <div className="userbox">
                            <div className="image_box"><img src="/women3.webp" alt="" /></div>
                            <h4 className="img_heading">Kurti</h4>
                        </div></Link>
                        <Link to="/women?styling=Embroidered">
                        <div className="userbox">
                            <div className="image_box"><img src="/women4.webp" alt="" /></div>
                            <h4 className="img_heading">Embroidered</h4>
                        </div></Link>
                    </div>
            </div>

            <div className="user_collection">
                <h1>Shop By Fragnaces & Cosmetics</h1>
                    <div className="innercollection">
                        <Link to="/frag?gender=Men">
                        <div className="userbox">
                            <div className="image_box"><img src="/frag1.webp" alt="" /></div>
                            <h4 className="img_heading">Men Fragnance</h4>
                        </div></Link>
                        <Link to="/frag?gender=Women">
                        <div className="userbox">
                            <div className="image_box"><img src="/frag2.webp" alt="" /></div>
                            <h4 className="img_heading">Women Fragnance</h4>
                        </div></Link>
                        <div className="userbox">
                            <div className="image_box"><img src="/frag3.webp" alt="" /></div>
                            <h4 className="img_heading">Cosmetics</h4>
                        </div>
                        <div className="userbox">
                            <div className="image_box"><img src="/frag4.webp" alt="" /></div>
                            <h4 className="img_heading">Skin Cares</h4>
                        </div>
                    </div>
            </div>

            <div className="user_collection">
                <h1>Shop By Boys & Girls Category</h1>
                    <div className="innercollection">
                        <Link to="/kid?gender=Teen-Girls">
                        <div className="userbox">
                            <div className="image_box"><img src="/teen1.webp" alt="" /></div>
                            <h4 className="img_heading">Teen Girls</h4>
                        </div></Link>
                        <Link to="/kid?gender=Teen-Boys">
                        <div className="userbox">
                            <div className="image_box"><img src="/teen2.webp" alt="" /></div>
                            <h4 className="img_heading">Teen Boys</h4>
                        </div></Link>
                        <Link to="/kid?gender=Kid-Girls">
                        <div className="userbox">
                            <div className="image_box"><img src="/teen3.webp" alt="" /></div>
                            <h4 className="img_heading">Kid Girls</h4>
                        </div></Link>
                        <Link to="/kid?gender=Kid-Boys">
                        <div className="userbox">
                            <div className="image_box"><img src="/teen4.webp" alt="" /></div>
                            <h4 className="img_heading">Kid Boys</h4>
                        </div></Link>
                    </div>
            </div>
        </>
    )
}
export default Home_body