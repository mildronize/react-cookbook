import React from 'react';

const FilterButton = ({ isActive, children, setVisibilityFilter }) => (
    <button
        onClick={() => setVisibilityFilter()}
        disabled={isActive} >
    {children}
    </button>
)

export default FilterButton;