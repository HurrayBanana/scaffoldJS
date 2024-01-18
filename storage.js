//declare a variable
let a;

//declare and initialise a variable
let a = 5;

//declare a constant - fixed value at design time must be initialised
const dave = "bloke";

//arrays/lists

//declare an empty array
let arr = [];

//create an 1d array instance of specific size 10;
let arr = new Array(10)

//access 5th element
let b = arr[4];
//set 4th element
arr[3] = 45;

//initialise an empty 1d array with 0
for (let p = 0; p < arr.length; p++){
  arr.push(0);
}

//visit all elements of a 1d array changing their values
for (let p = 0; p < arr.length; p++){
  arr[0] = 45 * p;
}

//visit all elements of a 1d array changing their values
let total = 0;
for (let p = 0; p < arr.length; p++){
  total += arr[p];
}
//output sum and average
console.log(total, total/arr.length);

//create a 2d array of a specific dimension
//after create the column arrays for each row
let ar = new Array(rows);
for (let p = 0; p < 10; p++){
  ar[p] = new Array(columns);
};

//initialising all elements of a 2d array to 73
for (let r = 0; r < map.length; r++){
    for (let c = 0; c < map[0].length; c++){
      map[r][c] = 73;
    }
}

//processing a single row of a 2d array
let row = 3;
let rowtotal = 0;
for (let c = 0; c < map[0].length; c++){
  rowtotal += map[row][c];
}

//processing a single column of a 2d array
let column = 7;
let coltotal = 0;
for (let r = 0; r < map.length; r++){
  coltotal += map[r][column];
}

//append to an array - extend
arr.push(item);

//delete a single item from and array
let index = 7;
arr.splice(index,1);

//delete consecutive items from and array
let index = 3;
let deletecount = 7
arr.splice(index, deletecount);




