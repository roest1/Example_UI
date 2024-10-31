import React from 'react';

const SvgIcon = ({
    viewBox,
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    height = null,
    width = null,
    className = '',
    stroke = null,
    strokeWidth = null,
    strokeLinecap = null,
    strokeLinejoin = null,
    pathData = [],
}) => (
    <svg
        viewBox={viewBox}
        fill={fill}
        xmlns={xmlns}
        className={className}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        height={height}
        width={width}
    >
        {pathData.map((d, index) => (
            <path key={index} d={d} />
        ))}
    </svg>
);

export default SvgIcon;
