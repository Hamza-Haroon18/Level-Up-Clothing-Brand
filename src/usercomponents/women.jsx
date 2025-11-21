// import { useState } from 'react';
// import Header from './header';
// import Footer from './footer';
// import Add_data from './add_data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import './women.css';

// function Women() {
//   const [currentList, setCurrentList] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState({});

//   const handleClick = (listName) => {
//     setCurrentList(currentList === listName ? '' : listName);
//   };

//   const handleSelect = (group, value) => {
//     if (selectedFilters[group] && selectedFilters[group] !== value) return; // block other options
//     setSelectedFilters(prev => ({
//       ...prev,
//       [group]: prev[group] === value ? null : value
//     }));
//   };

//   const clearFilter = (group) => {
//     setSelectedFilters(prev => {
//       const updated = { ...prev };
//       delete updated[group];
//       return updated;
//     });
//   };

//   const clearAllFilters = () => {
//     setSelectedFilters({});
//   };

//   const options = {
//     category: ['1-piece', '2-Piece', '3-Piece'],
//     fabric: ['Lawn', 'Cotton', 'Linen', 'Chiffon', 'Raw Silk', 'Khadder', 'Silk', 'Dobby', 'Handwoven'],
//     styling: ['Casual', 'Formal', 'Luxury', 'Printed', 'Embroidered'],
//     wear: ['Casual', 'Partywear', 'Festive', 'Office Wear'],
//     trouser: ['Dyed Trouser', 'Printed Trouser', 'Embroidered Trouser', 'Plain Trouser'],
//     color: ['Pastels', 'Brights', 'Neutrals', 'Dark Shades', 'Multicolor'],
//     season: ['Spring/Summer', 'Autumn/Winter', 'All‑Season', 'Festive Collection'],
//     productType: ['Stitched', 'Unstitched', 'Ready‑to‑Wear'],
//     size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
//   };

//   return (
//     <>
//       <Header />
//       <div className="main-container">
//         <div className="sidebar">
//           <h4>Shopping Options</h4>

//           {Object.entries(options).map(([group, items]) => (
//             <div key={group}>
//               <h3 onClick={() => handleClick(group)} className="heading-with-icon">
//                 <span>{group.charAt(0).toUpperCase() + group.slice(1)}</span>
//                 <FontAwesomeIcon icon={faCaretDown} className={`dropdown-icon ${currentList === group ? 'rotate' : ''}`} />
//               </h3>

//               {currentList === group && (
//                 <ul>
//                   {items.map((item) => {
//                     const isSelected = selectedFilters[group] === item;
//                     const isDisabled = selectedFilters[group] && !isSelected;
//                     return (
//                       <li
//                         key={item}
//                         className={isSelected ? 'selected' : isDisabled ? 'disabled' : ''}
//                         onClick={() => handleSelect(group, item)}
//                       >
//                         {item}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>
//           ))}

//           <div className="filter">
//             <h4>Filtered Products</h4>
//             <ul>
//               {Object.entries(selectedFilters).map(([group, value]) => (
//                 <li key={group}>
//                   <strong>{group}:</strong> {value}
//                   <button onClick={() => clearFilter(group)}>x</button>
//                 </li>
//               ))}
//             </ul>
//             {Object.keys(selectedFilters).length > 0 && (
//               <button onClick={clearAllFilters}>Clear All</button>
//             )}
//           </div>
//         </div>

//         <div className="content-area">
//           <Add_data filters={selectedFilters} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Women;

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import Add_data from './add_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './women.css';

function WomenUser() {
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
    category: ['1-piece', '2-Piece', '3-Piece'],
    fabric: ['Lawn', 'Cotton', 'Linen', 'Chiffon', 'Raw Silk', 'Khadder', 'Silk', 'Dobby', 'Handwoven'],
    styling: ['Casual', 'Formal', 'Luxury', 'Printed', 'Embroidered'],
    wear: ['Casual', 'Partywear', 'Festive', 'Office Wear'],
    trouser: ['Dyed Trouser', 'Printed Trouser', 'Embroidered Trouser', 'Plain Trouser'],
    color: ['Pastels', 'Brights', 'Neutrals', 'Dark Shades', 'Multicolor'],
    season: ['Summer', 'Winter', 'All‑Season', 'Festive Collection'],
    productType: ['Stitched', 'Unstitched', 'Ready‑to‑Wear'],
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
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

export default WomenUser;
