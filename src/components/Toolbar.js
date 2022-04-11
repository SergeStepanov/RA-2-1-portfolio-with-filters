import React from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className='filter-btn-box'>
      {filters.map((o, index) => {
        return (
          <button
            key={index + 1}
            className={'filter-btn' + (selected === o ? ' selected' : '')}
            data-filter={o}
            onClick={() => onSelectFilter(o)}>
            {o}
          </button>
        );
      })}
    </div>
  );
}
