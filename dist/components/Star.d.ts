import React from 'react';
interface StarProps {
    offSetValue: number;
    starClassName?: string;
    starStrokeColor?: {};
    starStrokeWidth?: number;
    starFillColor?: string;
    starStyle?: {};
}
declare const Star: ({ starClassName, starStrokeColor, starStrokeWidth, starFillColor, starStyle, offSetValue, }: StarProps) => React.JSX.Element;
export default Star;
