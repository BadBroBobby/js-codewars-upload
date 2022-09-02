//Find Mean


//Find the mean (average) of a list of numbers in an array.

//Solution

const findAverage =  nums => nums.reduce( (acc, c) =>acc+c) / nums.length


//8kyu SURFACE AREA AND VOLUME OF A BOX

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//solution
function getSize(width, height, depth){
    return [(depth*height*2)+(width*depth*2)+(width*height*2), width*height*depth]
  }