import React, { useState } from 'react';
import { packingList } from '../utils/constants';
import { FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const PackingList = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [openCategory, setOpenCategory] = useState(Object.keys(packingList)[0]);

  const toggleItem = (category, item) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${category}-${item}`]: !prev[`${category}-${item}`]
    }));
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="section-title">
        <span className="text-amber-500">Packing</span> Checklist
      </h2>
      
      <div className="glass-card p-6">
        {Object.entries(packingList).map(([category, items]) => (
          <div key={category} className="mb-4 border-b border-white/10 last:border-0 pb-4 last:pb-0">
            <button 
              onClick={() => toggleCategory(category)}
              className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
            >
              <h3 className="text-lg font-bold text-amber-500">{category}</h3>
              {openCategory === category ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {openCategory === category && (
              <div className="mt-4 space-y-2 pl-2">
                {items.map((item) => (
                  <label 
                    key={item} 
                    className="flex items-center space-x-3 cursor-pointer group hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checkedItems[`${category}-${item}`] ? 'bg-amber-500 border-amber-500' : 'border-gray-600 group-hover:border-amber-500'}`}>
                      {checkedItems[`${category}-${item}`] && <FiCheck className="text-dark text-xs" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={!!checkedItems[`${category}-${item}`]}
                      onChange={() => toggleItem(category, item)}
                    />
                    <span className={`text-gray-300 ${checkedItems[`${category}-${item}`] ? 'line-through text-gray-500' : ''}`}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingList;