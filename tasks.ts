//1. Define a function, that takes string as argument and prints "Hello, %arg%!"

function str( item: string){

this.item = item;

console.log("hello " + this.item + "!");

}

str("world");

//2. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.

function sum(arr:number[]){
  let sum = 0;
  let len = arr.length;

  for(let i=0; i<len; i++){
    sum += arr[i];
  }

  console.log(sum);
}

sum([1, 2, 3, 4]);

function  multiply(arr:number[]){
  let mul = 1;
  let len = arr.length;

  for(let i=0; i<len; i++){
    mul *= arr[i];
  }
  console.log(mul);
}

multiply([1, 2, 3, 4]);

//3. Define a function reverse() that computes the reversal of a string. For example, reverse("I am testing") should return the string "gnitset ma I".
function reverse(item: string){
  let len = item.length;
  let rev_str = "";
  
  for(let i = len-1; i >= 0; i--){
    rev_str += item[i];
  }

  console.log(rev_str);
}

reverse("I am testing");

//4. Define a function isPalindrome() that recognizes palindromes (i.e. words that look the same written backwards). 
//For example, isPalindrome("radar") should return True

function isPalindrome(item: string) {
  let len = item.length;
  let palindrome = ' ';
  for(let i=0; i<len; i++){
    if(item[i] === item[len-1-i] ){
      palindrome  = 'true';
    } else {
      palindrome  = 'false';
    }
  } 
  console.log(palindrome); 
}
isPalindrome("radar");
isPalindrome("rad");

//5. Define a procedure histogram() that takes an array of integers and prints a histogram to the screen.
function histogram(arr: number[]) {
  let str = '*';

  for(let i in arr){
    console.log(str.repeat(arr[i]));
  }
} 
histogram([4, 9, 7]);

  //Version task 5 without repeat
  function histogram2(arr: number[]) {
    let arr_pict: string[] = []; 
    let len = arr.length; 

    for(let i=0; i<len; i++){ 
      arr_pict[i] = ''; 
      for(let j=1; j<=arr[i]; j++){ 
        arr_pict[i] += "*"; 
      } console.log(arr_pict[i]); 
    }
  } 
  histogram2([4, 9, 7]);

//=================================================================================================================

//1.Define a function caesarCipher that takes string and key(number), whuch returns encrypted string
function caesarCipher(str: string, key: any){
  let len = str.length;
  let cipher = "";
  let k: number;
  
  if (key > 26){
    while (key > 26){
      key = key - 26;
      for(let i=0; i<len; i++){
        cipher += String.fromCharCode(str.toLowerCase().charCodeAt(i)+key);   
      }
      k++;
    }
  } else {
      for(let i=0; i<len; i++){
        cipher += String.fromCharCode(str.toLowerCase().charCodeAt(i)+key);   
      }    
  }
  
  console.log(cipher);
}
caesarCipher("Hi", 2);

//2.Define a function diagonalReverse() that takes matrix and returns diagonal-reversed one

function diagonalReverse(arr: number[][]) {
let len = arr.length;
let matrix: number[][]=[[], [], []];

  for(let i=0; i<len; i++){
    for(let j=0; j<len; j++){
      matrix[i][j] = arr[j][i];
      console.log(matrix[i][j]);
      
    }
     console.log('-------------------');
  }
  console.log('==========');
  console.log('arr ' + arr);
  console.log('final reverse matrix ' + matrix);
}

diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

//==============================================================================================================
//1. Write a function game() number-guessing game, that takes 2 int parameters defining the range. 
//Using some kind of random function to generate random int from the range. 
//While user input isn't equal that number, print "Try again!". If user guess the number, congratulate him and exit.

function game(from: number, to: number){
  let result = Math.floor(Math.random()*(to-from) + from);
  console.log(result);

  let choise: number;

  choise = +prompt("You need type right number betveen " + from + " - " + to);

  while(choise !== result){
    choise = +prompt("Try again! You need number betveen " + from + " - " + to);
  }
    alert("Congratulate!!! You chose correct number");

    console.log(choise);
  }

game(10, 12);

//2. Define a function, which takes a string with N opening brackets ("[") and N closing brackets ("]"), in some arbitrary order.
//Determine whether the generated string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

function findBrackets(str: string){
  let regexp1 = (/\[/gi);
  let regexp2 = (/\]/gi);
  let matches_array1: string[] = str.match(regexp1);
    let len1 = matches_array1.length;

  let matches_array2: string[] = str.match(regexp2);
    let len2 = matches_array2.length;

  if(matches_array1.length === matches_array2.length){    
      console.log(matches_array1 + matches_array2 + ' OK');
    
  } else {
      if(len1 > len2){      
          console.log(matches_array1 + matches_array2 + ' NOT OK');      
      } else {
        
          console.log(matches_array1 + matches_array2 + ' NOT OK');      
      }    
    }
}

findBrackets("[and N [cl[osing bracke]ts ]");

// 1. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// Represent the frequency listing as a Python dictionary. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(str: string){
  let dic = {};
  let len: number = str.length;
  let matches_array: string[];
  
  
  for(let i=0; i< len; i++){
    let reg = new RegExp(str[i], 'gi');
    matches_array = str.match(reg);   

    dic[str[i]] = matches_array.length;
  }
  
  for(var item in dic){
    console.log("Sum of letters " + item + " in your string : " + dic[item]);
  }
}

charFreq("abbabcbdbabdbdbabababcbcbab");


// 2. Write a function decToBin() that taces decimal integer and outputs its binary representation.
function decToBin(num: number){
  console.log(num.toString(2));
}
decToBin(44);

// 3. Write a ship battle game, which is similar to ex.8, except it takes 1 integer as an order of matrix, 
// randomly generates index (x, y) and checks user input (2 integers).

function battle(num: number){  
  let result: string = '' + Math.floor(Math.random()*(num)) + ',' + Math.floor(Math.random()*(num));

  console.log(result);

  let choise: string = prompt("You need type coordinate betveen " + num + " and " + num, "0,0");
  
  while(choise != result){ 
    choise = prompt("Try again! You need coordinate betveen " + num + " and " + num, "0,1");
  }
    alert("Congratulate!!! You chose the correct coordinate and kill your opponent");

    console.log(choise);
  }

battle(2);