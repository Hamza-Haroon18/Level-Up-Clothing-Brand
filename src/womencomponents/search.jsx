import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './search.css';

function SearchBaruser() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { id } = useParams();
    
    const handleChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 0) {
            try {
                const res = await fetch(`http://localhost:3000/admin/search?query=${value}`);
                if (res.ok) {
                    const data = await res.json();
                    setSuggestions(data);
                } else {
                    console.error("Server error:", res.status);
                }
            } catch (error) {
                console.error("Search error:", error.message);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search clothes..."
                    value={query}
                    onChange={handleChange}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </div>

            {/* {query.length > 0 && suggestions.length > 0 && (
                <div className="search-box">
                    <ul className="suggestions-list">
                        {suggestions.map((product, index) => (
                            <li key={index}>
                                <Link to={`/admin/show-product/${product._id}`}>
                                <img
                                    src={`http://localhost:3000/uploads/${product.image}`}
                                    alt={product.productname}
                                />
                                {product.productname}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
            {query.length > 0 && suggestions.length > 0 && (
  <div className="search-box">
    <ul className="suggestions-list">
      {suggestions.map((product, index) => {
        const validCategories = [
          'men', 'women', 'kid', 'frag',
          'salemen', 'sale', 'salekid', 'salefrag'
        ];

        const category = product.maincategory?.toLowerCase();

        if (!validCategories.includes(category)) return null;

        const route =
          category === 'men' ? `/admin/menshow-product/${product._id}` :
          category === 'women' ? `/admin/womenshow-product/${product._id}` :
          category === 'kid' ? `/admin/kidshow-product/${product._id}` :
          category === 'frag' ? `/admin/fragshow-product/${product._id}` :
          category === 'salemen' ? `/admin/salemenshow-product/${product._id}` :
          category === 'sale' ? `/admin/saleshow-product/${product._id}` :
          category === 'salekid' ? `/admin/salekidshow-product/${product._id}` :
          category === 'salefrag' ? `/admin/salefragshow-product/${product._id}` :
          null;

        if (!route) return null;

        return (
          <li key={index}>
            <Link to={route} className="suggestion-link">
              <img
                src={`http://localhost:3000/uploads/${product.image}`}
                alt={product.productname}
              />
              {product.productname}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
)}


        </>
    );
}

export default SearchBaruser;
