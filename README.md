# React Five Star Rating

Simple React component that returns an array of STARS based on the input rating value(eg. 3.4)

## Description

Steps to use the package.

1. Install the package from npm registry using the following command.

```
npm i react-five-star-rating
```

2. Import the StarRatings Component in your React component.

```
import StarRatings from 'react-five-star-rating';
```

3. Use the Star Rating component by passing a Decimal Rating value and a css/Tailwind classname with height and width values for a star

```
<StarRatings
      rating={2.8}          
      containerClassName="star-rating-container"                // CSS/Tailwind classnames for the star container, set height and width
      starFillColor="aqua"                                      // Optional - fill color for the stars, default color is gold
      startStrokeColor="grey"                                   // Optional - Stroke color surrounding the star. default color is black    
      concise                                                   // Optional - When true, shows only the necessary number of stars for rating  
    />
```

4. Star rating with default options

![Image with default props]('./readme-resources/image2.png')

5. Optional props

  * containerStyle - style object for the star's wrapper
  * starClassName - css/Tailwind classname that applies to the star SVG
  * starStyle - style object for the star SVG
  * starFillColor - Fill color for the stars. Default color is gold <br>
  ![Image with default props]('./readme-resources/image1.png')<br>
  * starStrokeColor - Stroke color for the stars. Default stroke color is black
  * starStrokeWidth - Stroke width for each star in pixels. Default is 0.5px
  * Concise - When true, shows only necessary number of stars required to display the rating (3 stars for a rating of 2.80). When false, five stars will be returned <br>
  ![Image with default props]('./readme-resources/image3.png')<br>


## Authors

Ram Kumar Karuppusamy <br>
[Github](https://github.com/ram1117) <br>
[LinkedIn](https://www.linkedin.com/in/ram-kumar-karuppusamy/)

## Version History

* 1.1.4
    * Initial Release - With all the bug fixes and refactoring after publishing

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
