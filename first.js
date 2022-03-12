// // Question-1) Do the below programs in anonymous function & IIFE

// // a) Print odd numbers in an array



// // Immediately invoked gunction expression

(function (array1){
    let odd=[];
    for(i=0;i<array1.length;i++){
        if(array1[i]%2==1){
            odd.push(array1[i])
        }
    }
    console.log(odd)
})([10,11,12,13,15,16,17,18,19,20]);

// // Output-->[ 11, 13, 15, 17, 19 ]

// //Anonymous function

let getOdd= function(array1){
    let odd=[];
    for(i=0;i<array1.length;i++){
        if(array1[i]%2==1){
         odd.push(array1[i])
        }
    }
    console.log(odd)
}
getOdd([10,11,12,13,15,16,17,18,19,20]);

// // Output-->[ 11, 13, 15, 17, 19 ]

// // b) Convert all the strings to title caps in a string array

//IIFE
(function(str){
// split the string into array of strings
str=str.toLowerCase().split(" ");
//looping
for(var i=0; i<str.length; i++){
    //changing first letter of each word to uppercase and appending remaing letters
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
//now joining all words by spaces
console.log(str.join(" "));
})("the future depends on what we do in tHe present");

// output--> The Future Depends On What We Do In The Present

// Anonymous function

let toTitleCaps=function(str){
  str=str.toLowerCase().split(" ");
//looping
for(var i=0; i<str.length; i++){
    //changing first letter of each word to uppercase and appending remaing letters
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
//now joining all words by spaces
console.log(str.join(" "));
};
toTitleCaps("the future depends on what we do in tHe present");

//output-->The Future Depends On What We Do In The Present


// // c) Sum of all numbers in an array

// //IIFE

(function (arr){
    let sum=0;
    for (var i in arr){
        sum=sum+arr[i]
    }
    console.log(`Sum of all numbers in an array is : ${sum}`)
})([1,2,3,4,5,6,7,8,9,10]);

// Output--> Sum of all numbers in an array is : 55

// //Anonymous function

let totalSum= function (arr){
    let sum=0;
    for (var i in arr){
        sum=sum+arr[i]
    }
    console.log(`Sum of all numbers in an array is : ${sum}`)
}
totalSum([1,2,3,4,5,6,7,8,9,10]);

// // Output-->Sum of all numbers in an array is : 55

// // d) Return all the prime numbers in an array



(function(array){
    var prime=[];
    function isPrime(item){
        var ident=item/2;
        for(var j=2;j<=ident;j++)
        {
            if((item%j)==0){
                return false;
            }
        }
        return true;
    }
    
    for(var index=0;index<array.length;index++)
    {   if(isPrime(array[index])){
        prime.push(array[index])
    }
    }
    console.log(prime);
})([4,5,2,6,7,99]);

//output-->[5, 2, 7]

//Anonymous function 

let primeArray=function(array){
  var prime=[];
  function isPrime(item){
      var ident=item/2;
      for(var j=2;j<=ident;j++)
      {
          if((item%j)==0){
              return false;
          }
      }
      return true;
  }
  
  for(var index=0;index<array.length;index++)
  {   if(isPrime(array[index])){
      prime.push(array[index])
  }
  }
  console.log(prime);
};
(primeArray([4,5,2,6,7,99]));

// output-->[5, 2, 7]

// e) Return all the palindromes in an array

// IIFE   

(function(arr){
    let palindromeArr=[];
for(let i=0;i<arr.length;i++){
    let reverseArr=arr[i].toString().split("").reverse().join("")
    if(reverseArr==arr[i]){
        palindromeArr.push(arr[i])}
}
console.log(palindromeArr);

})(["cac","civic","ayush",121])

// output-->['cac', 'civic', 121]

//Anonymous function

let palindromeArray=function(arr){
  let palindromeArr=[];
for(let i=0;i<arr.length;i++){
    let reverseArr=arr[i].toString().split("").reverse().join("")
    if(reverseArr==arr[i]){
        palindromeArr.push(arr[i])}
}
console.log(palindromeArr);

}(["cac","civic","ayush",121]);

// output-->['cac', 'civic', 121]



// f)Return median of two sorted arrays of the same size

// IIFE

(function (array1, array2) {
  let array = [...array1, ...array2]; //Merged two arrays by using spread parameter[4,6,8,2,1,3,5,9]
  array.sort();//now sorting the array after merging them[1,2,3,4,5,6,8,9]

let length=array.length;//the length of array of same size will always be even
//we now median of array of 0f n element will be average of (n/2 and (n/2)+1)th elemnent

 let median = (array[length / 2 - 1] + array[length / 2])/2;
 //but in array as indexing starts from 0 so let say for "2n" length of array the median will be average of (n-1) index value and n index value

  console.log(median);
})([4, 6, 8, 2], [1, 3, 5, 9]); //I have taken two sorted array

// output-->4.5

// Anonymous     

let median=function(array1,array2){
  let array = [...array1, ...array2]; //Merged two arrays by using spread parameter[4,6,8,2,1,3,5,9]
  array.sort();//now sorting the array after merging them[1,2,3,4,5,6,8,9]

let length=array.length;//the length of array of same size will always be even
//we now median of array of 0f n element will be average of (n/2 and (n/2)+1)th elemnent

 let median = (array[length / 2 - 1] + array[length / 2])/2;
 //but in array as indexing starts from 0 so let say for "2n" length of array the median will be average of (n-1) index value and n index value

  console.log(median);
}([4, 6, 8, 2], [1, 3, 5, 9])

// output-->4.5


// g) Remove duplicates from an array


// IIFE

(function(array){
    let newArray=[...new Set(array)];
    console.log(newArray);
})([1,2,3,2,4,2,5,1])

// output-->[1, 2, 3, 4, 5]

// Anonymous
let setArray=function(array){
  let newArray=[...new Set(array)]
    console.log(newArray)
}([1,2,3,2,4,2,5,1]);

// output--->[1, 2, 3, 4, 5]

// h) Rotate an array by k times

// IIFE

(function(number,k){
  for(let i=0;i<k;i++){
    number.unshift(number.pop());
  }
  console.log(number);
})([1,2,3,4,5,6,7],3);

// output-->[5, 6, 7, 1, 2, 3, 4]

// Anonymous

let rotatedArray=function(number,k){
  for(let i=0;i<k;i++){
    number.unshift(number.pop());
  }
  console.log(number);
}([1,2,3,4,5,6,7],3);

// output-->[5, 6, 7, 1, 2, 3, 4]


