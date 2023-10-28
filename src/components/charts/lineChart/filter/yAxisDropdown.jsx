import React, { useState } from 'react';
import Select from 'react-select';

import { GetNumKeys } from '../../data/getNumKeys';


export const YAxisDropdown = (props) => {
    // Get options
    let numOptions = [];

    let array = GetNumKeys()

    if(array !== null) {
        for (let i = 0; i < array.length; i++) {
            let obj = {};
            obj.value = array[i];
            obj.label = array[i];
            numOptions.push(obj);
        }
    }

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "#444444" }),
        option: (styles) => {
            return {
                ...styles,
                color: "#eaeaea",
                backgroundColor: '#444444',
                padding: 5,
            };
        },
        singleValue: (styles) => {
            return {
                ...styles,
                color: '#eaeaea',
            }
        },
        menu: (styles) => {
            return {
                ...styles,
                backgroundColor: '#444444',
            }
        },
        input: (styles) => {
            return {
                ...styles,
                color: '#eaeaea',
            }
        }
    };

    // Selected options for dropdown
    const  [selectedOption, setSelectedOption] = useState(null);

    const handleChange = e => {
        setSelectedOption(e)
        props.setYAxisOption(e)
    }

    return (
        <div className="filterDropdown">
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={numOptions}
                styles={colourStyles}
                placeholder={<div className="select-placeholder-text">Select Y Axis Value</div>}
            />
        </div>
    );
}


