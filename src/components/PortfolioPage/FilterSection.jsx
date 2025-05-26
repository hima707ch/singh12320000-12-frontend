import React from 'react';

const FilterSection = ({ selectedType, selectedDate, onTypeChange, onDateChange }) => {
  const types = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Branding'];
  const dateOptions = ['Newest', 'Oldest'];

  return (
    <div id="FilterSection_1" className="flex flex-wrap gap-4 mb-8">
      <div id="FilterSection_2" className="flex-1 min-w-[200px]">
        <select
          id="FilterSection_3"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div id="FilterSection_4" className="flex-1 min-w-[200px]">
        <select
          id="FilterSection_5"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {dateOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;