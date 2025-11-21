
import Home from './womencomponents/home'
import About from './womencomponents/about'
import Contact from './usercomponents/contact'
import Message from './womencomponents/message'
import Shipping from './womencomponents/shipping'
import Store from './womencomponents/location'
import Terms from './womencomponents/service'
import Policy from './womencomponents/policy'
import Orderhistory from './womencomponents/orderhistory'
import ReturnsPolicy from './womencomponents/return'
import FAQ from './womencomponents/faqs'
import PrivateRoute from './PrivateRoute';

//FOR WOMEN
import Women from './womencomponents/women'
import Addproduct from './womencomponents/add-product'
import Editproduct from './womencomponents/edit-product'
import Deleteproduct from './womencomponents/delete-product'
import ProductPage from './womencomponents/show-product';
//FOR MEN
import Men from './mencomponents/men'
import Addproductmen from './mencomponents/menadd-product'
import Editproductmen from './mencomponents/menedit-product'
import Deleteproductmen from './mencomponents/mendelete-product'
import ProductPagemen from './mencomponents/menshow-product';

//FOR KIDS
import Kids from './kidcomponents/kid'
import Addproductkid from './kidcomponents/kidadd-product'
import Editproductkid from './kidcomponents/kidedit-product'
import Deleteproductkid from './kidcomponents/kiddelete-product'
import ProductPagekid from './kidcomponents/kidshow-product';

//FOR FRAGNANCES
import Fragnance from './fragcomponents/frag'
import Addproductfrag from './fragcomponents/fragadd-product'
import Editproductfrag from './fragcomponents/fragedit-product'
import Deleteproductfrag from './fragcomponents/fragdelete-product'
import ProductPagefrag from './fragcomponents/fragshow-product';

//FOR COSMETICS
import Cosmetics from './cosmeticscomponents/cosmetics'
import Addproductcosmetics from './cosmeticscomponents/cosmeticsadd-product'
import Editproductcosmetics from './cosmeticscomponents/cosmeticsedit-product'
import Deleteproductcosmetics from './cosmeticscomponents/cosmeticsdelete-product'
import ProductPagecosmetics from './cosmeticscomponents/cosmeticsshow-product';

//FOR SKIN CARES
import Skincares from './skincarescomponents/skincares'
import Addproductskincares from './skincarescomponents/skincaresadd-product'
import Editproductskincares from './skincarescomponents/skincaresedit-product'
import Deleteproductskincares from './skincarescomponents/skincaresdelete-product'
import ProductPageskincares from './skincarescomponents/skincaresshow-product';

//FOR SALE
import Womensale from './salecomponents/salewomen'
import Addproductsale from './salecomponents/saleadd-product'
import Editproductsale from './salecomponents/saleedit-product'
import Deleteproductsale from './salecomponents/saledelete-product'
import ProductPagesale from './salecomponents/saleshow-product';

import Mensale from './salecomponents/salemen'
import Addproductmensale from './salecomponents/salemenadd-product'
import Editproductmensale from './salecomponents/salemenedit-product'
import Deleteproductmensale from './salecomponents/salemendelete-product'
import ProductPagemensale from './salecomponents/salemenshow-product';

import Kidssale from './salecomponents/salekid'
import Addproductkidsale from './salecomponents/salekidadd-product'
import Editproductkidsale from './salecomponents/salekidedit-product'
import Deleteproductkidsale from './salecomponents/salekiddelete-product'
import ProductPagekidsale from './salecomponents/salekidshow-product';

import Fragnancesale from './salecomponents/salefrag'
import Addproductfragsale from './salecomponents/salefragadd-product'
import Editproductfragsale from './salecomponents/salefragedit-product'
import Deleteproductfragsale from './salecomponents/salefragdelete-product'
import ProductPagefragsale from './salecomponents/salefragshow-product';

//FOR USERS
import AboutUser from './usercomponents/aboutuser'
import ShippingUser from './usercomponents/shippinguser'
import StoreUser from './usercomponents/locationuser'
import TermsUser from './usercomponents/serviceuser'
import PolicyUser from './usercomponents/policyuser'
import ReturnsPolicyUser from './usercomponents/returnuser'
import FAQUser from './usercomponents/faqsuser'
import Homeuser from './usercomponents/home'
import WomenUser from './usercomponents/women'
import ProductPageUser from './usercomponents/show-product';
import MenUser from './usercomponents/men'
import ProductPagemenUser from './usercomponents/menshow-product';
import KidsUser from './usercomponents/kid'
import ProductPagekidUser from './usercomponents/kidshow-product';
import FragnanceUser from './usercomponents/frag'
import ProductPagefragUser from './usercomponents/fragshow-product';
import WomensaleUser from './usercomponents/salewomen'
import ProductPagesaleUser from './usercomponents/saleshow-product';
import MensaleUser from './usercomponents/salemen'
import ProductPagemensaleUser from './usercomponents/salemenshow-product';
import KidssaleUser from './usercomponents/salekid'
import ProductPagekidsaleUser from './usercomponents/salekidshow-product';
import FragnancesaleUser from './usercomponents/salefrag'
import ProductPagefragsaleUser from './usercomponents/salefragshow-product';
import Cart from './usercomponents/cart';
import Signup from './usercomponents/signup';
import Login from './usercomponents/login';
import NotFound from './usercomponents/not_found';
import Logout from './usercomponents/logout';
import Checkout from './usercomponents/checkout';
import Final from './usercomponents/final';
import Track from './usercomponents/track';

import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>

      <Routes>
        {/* FOR WOMEN */}
        <Route path="/home" element={<PrivateRoute element={<Home />} allowedRoles={["admin"]} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/shipping" element={<PrivateRoute element={<Shipping />} />} />
        <Route path="/location" element={<PrivateRoute element={<Store />} />} />
        <Route path="/message" element={<PrivateRoute element={<Message />} allowedRoles={["admin"]} />} />
        <Route path="/service" element={<PrivateRoute element={<Terms />} />} />
        <Route path="/policy" element={<PrivateRoute element={<Policy />} />} />
        <Route path="/return" element={<PrivateRoute element={<ReturnsPolicy />} />} />
        <Route path="/faqs" element={<PrivateRoute element={<FAQ />} />} />

        <Route path="/admin/order-history" element={<PrivateRoute element={<Orderhistory />} allowedRoles={["admin"]} />} />
        <Route path="/admin/women" element={<PrivateRoute element={<Women />} allowedRoles={["admin"]} />} />

        <Route path="/admin/women/add-product" element={<PrivateRoute element={<Addproduct />} allowedRoles={["admin"]} />} />
        <Route path="/admin/women/edit-product/:id" element={<PrivateRoute element={<Editproduct />} allowedRoles={["admin"]} />} />
        <Route path="/admin/womenshow-product/:id" element={<PrivateRoute element={<ProductPage />} allowedRoles={["admin"]} />} />
        <Route path="/admin/delete-product/:id" element={<PrivateRoute element={<Deleteproduct />} allowedRoles={["admin"]} />} />
        {/* FOR MEN */}
        <Route path="/admin/men" element={<PrivateRoute element={<Men />} allowedRoles={["admin"]} />} />
        <Route path="/admin/men/add-product" element={<PrivateRoute element={<Addproductmen />} allowedRoles={["admin"]} />} />
        <Route path="/admin/men/edit-product/:id" element={<PrivateRoute element={<Editproductmen />} allowedRoles={["admin"]} />} />
        <Route path="/admin/menshow-product/:id" element={<PrivateRoute element={<ProductPagemen />} allowedRoles={["admin"]} />} />
        <Route path="/admin/men/delete-product/:id" element={<PrivateRoute element={<Deleteproductmen />} allowedRoles={["admin"]} />} />


        <Route path="/admin/kid" element={<PrivateRoute element={<Kids />} allowedRoles={["admin"]} />} />
        <Route path="/admin/kid/add-product" element={<PrivateRoute element={<Addproductkid />} allowedRoles={["admin"]} />} />
        <Route path="/admin/kid/edit-product/:id" element={<PrivateRoute element={<Editproductkid />} allowedRoles={["admin"]} />} />
        <Route path="/admin/kidshow-product/:id" element={<PrivateRoute element={<ProductPagekid />} allowedRoles={["admin"]} />} />
        <Route path="/admin/kid/delete-product/:id" element={<PrivateRoute element={<Deleteproductkid />} allowedRoles={["admin"]} />} />

        <Route path="/admin/frag" element={<PrivateRoute element={<Fragnance />} allowedRoles={["admin"]} />} />
        <Route path="/admin/frag/add-product" element={<PrivateRoute element={<Addproductfrag />} allowedRoles={["admin"]} />} />
        <Route path="/admin/frag/edit-product/:id" element={<PrivateRoute element={<Editproductfrag />} allowedRoles={["admin"]} />} />
        <Route path="/admin/fragshow-product/:id" element={<PrivateRoute element={<ProductPagefrag />} allowedRoles={["admin"]} />} />
        <Route path="/admin/frag/delete-product/:id" element={<PrivateRoute element={<Deleteproductfrag />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Women */}
        <Route path="/admin/salewomen" element={<PrivateRoute element={<Womensale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salewomen/saleadd-product" element={<PrivateRoute element={<Addproductsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salewomen/saleedit-product/:id" element={<PrivateRoute element={<Editproductsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/saleshow-product/:id" element={<PrivateRoute element={<ProductPagesale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/saledelete-product/:id" element={<PrivateRoute element={<Deleteproductsale />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Men */}
        <Route path="/admin/salemen" element={<PrivateRoute element={<Mensale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salemen/salemenadd-product" element={<PrivateRoute element={<Addproductmensale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salemen/salemenedit-product/:id" element={<PrivateRoute element={<Editproductmensale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salemenshow-product/:id" element={<PrivateRoute element={<ProductPagemensale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salemendelete-product/:id" element={<PrivateRoute element={<Deleteproductmensale />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Kids */}
        <Route path="/admin/salekid" element={<PrivateRoute element={<Kidssale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salekid/kidadd-product" element={<PrivateRoute element={<Addproductkidsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salekid/kidedit-product/:id" element={<PrivateRoute element={<Editproductkidsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salekidshow-product/:id" element={<PrivateRoute element={<ProductPagekidsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salekiddelete-product/:id" element={<PrivateRoute element={<Deleteproductkidsale />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Fragrances */}
        <Route path="/admin/salefrag" element={<PrivateRoute element={<Fragnancesale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salefrag/salefragadd-product" element={<PrivateRoute element={<Addproductfragsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salefrag/salefragedit-product/:id" element={<PrivateRoute element={<Editproductfragsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salefragshow-product/:id" element={<PrivateRoute element={<ProductPagefragsale />} allowedRoles={["admin"]} />} />
        <Route path="/admin/salefragdelete-product/:id" element={<PrivateRoute element={<Deleteproductfragsale />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Cosmetics */}
        <Route path="/admin/cosmetics" element={<PrivateRoute element={<Cosmetics />} allowedRoles={["admin"]} />} />
        <Route path="/admin/cosmetics/cosmeticsadd-product" element={<PrivateRoute element={<Addproductcosmetics />} allowedRoles={["admin"]} />} />
        <Route path="/admin/cosmetics/cosmeticsedit-product/:id" element={<PrivateRoute element={<Editproductcosmetics />} allowedRoles={["admin"]} />} />
        <Route path="/admin/cosmeticsshow-product/:id" element={<PrivateRoute element={<ProductPagecosmetics />} allowedRoles={["admin"]} />} />
        <Route path="/admin/cosmeticsdelete-product/:id" element={<PrivateRoute element={<Deleteproductcosmetics />} allowedRoles={["admin"]} />} />

        {/* 🛡️ Admin Sale - Skin */}
        <Route path="/admin/skincares" element={<PrivateRoute element={<Skincares />} allowedRoles={["admin"]} />} />
        <Route path="/admin/skincares/skincaresadd-product" element={<PrivateRoute element={<Addproductskincares />} allowedRoles={["admin"]} />} />
        <Route path="/admin/skincares/skincaresedit-product/:id" element={<PrivateRoute element={<Editproductskincares />} allowedRoles={["admin"]} />} />
        <Route path="/admin/skincaresshow-product/:id" element={<PrivateRoute element={<ProductPageskincares />} allowedRoles={["admin"]} />} />
        <Route path="/admin/skincaresdelete-product/:id" element={<PrivateRoute element={<Deleteproductskincares />} allowedRoles={["admin"]} />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/women" element={<WomenUser />} />
        <Route path="/show-product/:id" element={<ProductPageUser />} />
        <Route path="/men" element={<MenUser />} />
        <Route path="/menshow-product/:id" element={<ProductPagemenUser />} />
        <Route path="/kid" element={<KidsUser />} />
        <Route path="/kidshow-product/:id" element={<ProductPagekidUser />} />
        <Route path="/frag" element={<FragnanceUser />} />
        <Route path="/fragshow-product/:id" element={<ProductPagefragUser />} />
        <Route path="/salewomen" element={<WomensaleUser />} />
        <Route path="/saleshow-product/:id" element={<ProductPagesaleUser />} />
        <Route path="/salemen" element={<MensaleUser />} />
        <Route path="/salemenshow-product/:id" element={<ProductPagemensaleUser />} />
        <Route path="/salekid" element={<KidssaleUser />} />
        <Route path="/salekidshow-product/:id" element={<ProductPagekidsaleUser />} />
        <Route path="/salefrag" element={<FragnancesaleUser />} />
        <Route path="/salefragshow-product/:id" element={<ProductPagefragsaleUser />} />

        <Route path="/cart" element={<Cart/>}/> */}

        {/* 🛡️ User */}
        <Route path="/" element={<PrivateRoute element={<Homeuser />} />} />
        <Route path="/aboutuser" element={<PrivateRoute element={<AboutUser />} />} />
        <Route path="/shippinguser" element={<PrivateRoute element={<ShippingUser />} />} />
        <Route path="/locationuser" element={<PrivateRoute element={<StoreUser />} />} />
        <Route path="/serviceuser" element={<PrivateRoute element={<TermsUser />} />} />
        <Route path="/policyuser" element={<PrivateRoute element={<PolicyUser />} />} />
        <Route path="/returnuser" element={<PrivateRoute element={<ReturnsPolicyUser />} />} />
        <Route path="/faqsuser" element={<PrivateRoute element={<FAQUser />} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />

        <Route path="/women" element={<PrivateRoute element={<WomenUser />} />} />
        <Route path="/show-product/:id" element={<PrivateRoute element={<ProductPageUser />} />} />

        <Route path="/men" element={<PrivateRoute element={<MenUser />} />} />
        <Route path="/menshow-product/:id" element={<PrivateRoute element={<ProductPagemenUser />} />} />

        <Route path="/kid" element={<PrivateRoute element={<KidsUser />} />} />
        <Route path="/kidshow-product/:id" element={<PrivateRoute element={<ProductPagekidUser />} />} />

        <Route path="/frag" element={<PrivateRoute element={<FragnanceUser />} />} />
        <Route path="/fragshow-product/:id" element={<PrivateRoute element={<ProductPagefragUser />} />} />

        <Route path="/salewomen" element={<PrivateRoute element={<WomensaleUser />} />} />
        <Route path="/saleshow-product/:id" element={<PrivateRoute element={<ProductPagesaleUser />} />} />

        <Route path="/salemen" element={<PrivateRoute element={<MensaleUser />} />} />
        <Route path="/salemenshow-product/:id" element={<PrivateRoute element={<ProductPagemensaleUser />} />} />

        <Route path="/salekid" element={<PrivateRoute element={<KidssaleUser />} />} />
        <Route path="/salekidshow-product/:id" element={<PrivateRoute element={<ProductPagekidsaleUser />} />} />

        <Route path="/salefrag" element={<PrivateRoute element={<FragnancesaleUser />} />} />
        <Route path="/salefragshow-product/:id" element={<PrivateRoute element={<ProductPagefragsaleUser />} />} />

        <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/cart/checkout" element={<PrivateRoute element={<Checkout />} />} />
        <Route path="/cart/checkout/order" element={<PrivateRoute element={<Final />} />} />
        <Route path="/track" element={<PrivateRoute element={<Track />} />} />
      </Routes>
    </>
  )
}

export default App

