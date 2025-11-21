import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import Add_data from './kidadd_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './kid.css';

function KidsUser() {
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
  category: ['Frock', 'Shirt_Shorts', 'Romper', 'Jumpsuit', 'Waistcoat Set', 'Kurta Pajama'],
  gender:['Teen-Boys','Teen-Girls','Kid-Boys','Kid-Girls'],
  fabric: ['Cotton', 'Lawn', 'Denim', 'Jersey', 'Linen', 'Silk Blend', 'Khaddar'],
  styling: ['Casual', 'Party', 'Fancy', 'Printed', 'Cartoon-Themed'],
  wear: ['Playwear', 'Partywear', 'Festive Wear', 'Sleepwear'],
  trouser: ['Shorts', 'Tights', 'Jeans', 'Pajama'],
  color: ['Pink', 'Blue', 'Yellow', 'White', 'Multicolor', 'Pastels', 'Brights'],
  season: ['Summer Collection', 'Winter Collection', 'All‑Season','Festive Collection'],
  product: ['Stitched','Unstitched', 'Ready‑to‑Wear'],
  size: ['0-1Y', '1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-9Y', '9-10Y']
};

  return (
    <>
      <HeaderUser />
      <div className="main-container">
        <div className="usersidebar">
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

          <div className="userfilter">
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

        <div className="content-area">
          <Add_data filters={selectedFilters} />
        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default KidsUser;
