import { line, curveNatural } from 'd3';

export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => (
    <g className="marks">
        <>
            <path
                fill="none"
                stroke="#E3BA22"
                style={{strokeWidth: '2px'}}
                d={line()
                    .x(d => xScale(xValue(d)))
                    .y(d => yScale(yValue(d)))
                    .curve(curveNatural)(data)}
                > <title>{tooltipFormat(yValue)}</title></path>
        </>
    </g>
);
