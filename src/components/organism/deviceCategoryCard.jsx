import React from 'react';

export const DeviceCategoryCard = ({categoryIcon, categoryName, handleClick}) => {

    const handleChange = (event) => {
        console.log(event.currentTarget.querySelector('h2').textContent)
        handleClick(event.currentTarget.querySelector('h2').textContent.toLowerCase());
      };

    return (
        <div className='deviceCategoryCard' onClick={handleChange}>
            <div className='deviceCategoryCard_headerInfo'>
            {categoryIcon}
            <h2>{categoryName}</h2>
            </div>
        </div>
    );
};
