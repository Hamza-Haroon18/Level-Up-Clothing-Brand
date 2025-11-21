import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import Add_data from './salemenadd_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './salemen.css';

function Mensale() {
  const [currentList, setCurrentList] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); 
  const getFiltersFromParams = () => {
    const filters = {};
    for (let [key, value] of searchParams.entries()) {
      filters[key] = value;
    }
    return filters;
  };

  const [selectedFilters, setSelectedFilters] = useState(getFiltersFromParams());

  useEffect(() => {
    setSelectedFilters(getFiltersFromParams());
  }, [searchParams]);

  const handleClick = (listName) => {
    setCurrentList(currentList === listName ? '' : listName);
  };

  const handleSelect = (group, value) => {
    if (selectedFilters[group] && selectedFilters[group] !== value) return;

    const updated = {
      ...selectedFilters,
      [group]: selectedFilters[group] === value ? null : value
    };

    Object.keys(updated).forEach(key => {
      if (!updated[key]) delete updated[key];
    });

    setSelectedFilters(updated);
    setSearchParams(updated); 
  };

  const clearFilter = (group) => {
    const updated = { ...selectedFilters };
    delete updated[group];
    setSelectedFilters(updated);
    setSearchParams(updated);
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setSearchParams({});
  };
  const options = {
  category: ['Kurta', 'Kameez-Shalwar', 'Waistcoat','Grooms-Sherwani', '2-Piece Suit', '3-Piece Suit'],
  fabric: ['Cotton', 'Wash & Wear', 'Polyester', 'Linen', 'Wool', 'Silk Blend', 'Khaddar'],
  styling: ['Casual', 'Formal', 'Semi-Formal', 'Embroidered', 'Plain'],
  wear: ['Daily Wear', 'Partywear', 'Wedding Wear', 'Office Wear'],
  trouser: ['Shalwar', 'Straight Pants', 'Jeans', 'Trouser','No Trouser'],
  color: ['White', 'Black', 'Beige', 'Grey', 'Blue', 'Pastel Shades', 'Dark Tones'],
  season: ['Summer Collection', 'Winter Collection', 'All‑Season', 'Festive Collection'],
  product: ['Stitched', 'Unstitched', 'Ready‑to‑Wear'],
  size: ['XS','S', 'M', 'L', 'XL', 'XXL', 'XXXL']
};

  return (
    <>
      <Header />
      <div className="main-containers">
        <div className="sidebars">
          <h4>Shopping Options</h4>

          {Object.entries(options).map(([group, items]) => (
            <div key={group}>
              <h3 onClick={() => handleClick(group)} className="heading-with-icon">
                <span>{group.charAt(0).toUpperCase() + group.slice(1)}</span>
                <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${currentList === group ? 'rotate' : ''}`} />
              </h3>

              {currentList === group && (
                <ul>
                  {items.map((item) => {
                    const isSelected = selectedFilters[group] === item;
                    const isDisabled = selectedFilters[group] && !isSelected;
                    return (
                      <li
                        key={item}
                        className={isSelected ? 'selected' : isDisabled ? 'disabled' : ''}
                        onClick={() => handleSelect(group, item)}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          <div className="filters">
            <h4>Filtered Products</h4>
            <ul>
              {Object.entries(selectedFilters).map(([group, value]) => (
                <li key={group}>
                  <strong>{group}:</strong> {value}
                  <button onClick={() => clearFilter(group)}>x</button>
                </li>
              ))}
            </ul>
            {Object.keys(selectedFilters).length > 0 && (
              <button onClick={clearAllFilters}>Clear All</button>
            )}
          </div>
        </div>

        <div className="content-areas">
          <Add_data filters={selectedFilters} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mensale;
