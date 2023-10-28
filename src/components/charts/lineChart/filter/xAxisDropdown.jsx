import React, { useState } from 'react';
import Select from 'react-select';

import { GetDateKeys } from '../../data/getDateKeys';

export const XAxisDropdown = (props) => {
        let numOptions = [];

        let array = GetDateKeys()

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
            props.setXAxisOption(e)
        }

        return (
            <div className="filterDropdown">
                <Select
                    styles={colourStyles}
                    value={selectedOption}
                    onChange={handleChange}
                    options={numOptions}
                    placeholder={<div className="select-placeholder-text">Select X Axis Value</div>}
                />
            </div>
        );
}


