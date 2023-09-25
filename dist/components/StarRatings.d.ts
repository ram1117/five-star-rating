import React from 'react';
interface StarRatingsProps {
    rating: number;
    imageSize?: number;
    responsiveSizes?: {
        [key: string]: number;
    };
    containerClassName?: string;
    containerStyle?: {};
    starClassName?: string;
    starStyle?: {};
    starFillColor?: string;
    starStrokeColor?: string;
    starStrokeWidth?: number;
    concise?: boolean;
}
export declare const StarRatings: ({ rating, containerClassName, containerStyle, starClassName, starStyle, starFillColor, starStrokeColor, starStrokeWidth, concise, }: StarRatingsProps) => React.JSX.Element;
export {};
