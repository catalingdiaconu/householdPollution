import React from 'react';
import {scaleLinear, scaleTime, timeFormat, extent, format} from 'd3';
import { useData} from '../data/useData';
import { AxisBottom } from './axisBottom';
import { AxisLeft } from './axisLeft';
import { Marks } from './marks';

const width = 1200;
const height = 500;
const margin = { top: 20, right: 80, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

export const LineChart = ({valueXAxis, valueYAxis}) => {

    const data = useData();

    if (!data) {
        return (
        <div className={'loadingData'}>
        <p>Loading...</p>
        </div>
        )
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = d => d[valueXAxis.value];
    const xAxisLabel = valueXAxis.label;

    const yValue = d => d[valueYAxis.value];
    const yAxisLabel = valueYAxis.label;

    const xAxisTickFormat = timeFormat('%d/%m/%Y');

    const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice()

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice();

    const siFormat = format('.2s');
    let yTickFormat = tickValue => {
        if (tickValue !== null && tickValue > 9999) {
            return siFormat(tickValue).replace('G', 'B');
        } else {
            return tickValue;
        }
    }

    return (
        <div>
            <header>
                <p>Line Chart</p>
             </header>
            {valueXAxis.value !== 0 && valueYAxis.value !== 0 ?
        <svg width={width} height={height} className={'chart'}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                    <AxisBottom
                        xScale={xScale}
                        innerHeight={innerHeight}
                        tickFormat={xAxisTickFormat}
                        tickOffset={7}
                    />
                    <text
                        className="axis-label"
                        textAnchor="middle"
                        transform={`translate(${-yAxisLabelOffset},${innerHeight /
                        2}) rotate(-90)`}
                    >
                        {yAxisLabel}
                    </text>
                    <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} tickFormat={yTickFormat} />
                    <text
                    className="axis-label"
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle"
                    >
                {xAxisLabel}
                    </text>
                    <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    tooltipFormat={yTickFormat}
                    circleRadius={3}
                    />
            </g>
        </svg> : <div className={'emptyChart'}>
                    <span>Select an Option for X and Y Axis</span>
                </div>
            }
        </div>
    );
};
