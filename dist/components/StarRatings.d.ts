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
declare const StarRatings: ({ rating, containerClassName, containerStyle, starClassName, starStyle, starFillColor, starStrokeColor, starStrokeWidth, concise, }: StarRatingsProps) => any;
export default StarRatings;
