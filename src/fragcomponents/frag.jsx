import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import Add_data from './fragadd_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './frag.css';

function Fragnance() {
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
  category: ['Perfume', 'Body Spray', 'Attar', 'Cologne', 'Deodorant'],
  fragranceType: ['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Spicy', 'Fruity', 'Aquatic'],
  gender: ['Men', 'Women', 'Unisex'],
  occasion: ['Casual', 'Formal', 'Evening Wear', 'Daily Use', 'Gift'],
  longevity: ['Short (1–2 hrs)', 'Moderate (3–6 hrs)', 'Long Lasting (7+ hrs)'],
  product: ['Spray', 'Roll-on', 'Solid Perfume', 'Oil-based'],
  size: ['10ml', '30ml', '50ml', '75ml', '100ml', '150ml']
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

export default Fragnance;