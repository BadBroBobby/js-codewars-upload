//#1 Find Mean


//Find the mean (average) of a list of numbers in an array.

//Solution

const findAverage =  nums => nums.reduce( (acc, c) =>acc+c) / nums.length


//#2 8kyu SURFACE AREA AND VOLUME OF A BOX

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//solution
function getSize(width, height, depth){
    return [(depth*height*2)+(width*depth*2)+(width*height*2), width*height*depth]
  }

//#3 Enumerable Magic - Does My List Include This?

//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

/* function include(arr, item){
    // ...
    return arr.includes(item) ? true : false
  }

  Messi goals function
  Messi is a soccer player with goals in three leagues:
  
  LaLiga
  Copa del Rey
  Champions
  Complete the function to return his total number of goals in all three leagues.
  
  Note: the input will always be valid.
  
  For example:
  
  5, 10, 2  -->  17 */

//Solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

 /*  Given a sequence of numbers, find the largest pair sum in the sequence.*/

  //Solution

function largestPairSum (numbers) {
    numbers.sort( (a,b) => a-b);
    let firstNum = numbers[numbers.length-1]
    let secondNum = numbers[numbers.length-2]
    return firstNum + secondNum
  }

/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Example(Input --> Output)
  
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
  
Note: String will have at least one element; words will always be separated by a space. */

//Solution
const addLength = str => str.split(' ').map( word => word + " " + word.length)