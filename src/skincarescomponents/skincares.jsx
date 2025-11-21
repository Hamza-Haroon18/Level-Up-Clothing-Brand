import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../womencomponents/header';
import Footer from '../womencomponents/footer';
import Add_data from './skincaresadd_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './skincares.css';

function Skincares() {
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

    Object.keys(updated).forEach((key) => {
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
  category: ['Skincare'],
  productType: ['Face Wash', 'Moisturizer', 'Serum', 'Sunscreen', 'Toner', 'Face Mask'],
  brand: ['Clinique', 'The Ordinary', 'CeraVe', 'Neutrogena', 'La Roche-Posay'],
  skinType: ['Oily', 'Dry', 'Combination', 'Sensitive', 'All Skin Types'],
  concern: ['Acne', 'Aging', 'Dark Spots', 'Hydration', 'Pores'],
  size: ['30ml', '50ml', '100ml', '200ml']
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
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`dropdown-icon ${currentList === group ? 'rotate' : ''}`}
                />
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

export default Skincares;
