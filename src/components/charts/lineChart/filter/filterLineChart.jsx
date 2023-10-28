import React from 'react'
import { XAxisDropdown } from "./xAxisDropdown";
import { YAxisDropdown } from "./yAxisDropdown";

export const FilterLineChart = (props) => {
    return (
        <div className={'filter'}>
            <header>
                <p>Filter</p>
            </header>
            <XAxisDropdown setXAxisOption={props.setXAxis}/>
            <YAxisDropdown setYAxisOption={props.setYAxis}/>
        </div>
    )
}