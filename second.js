// Question-3)Do the below programs in arrow functions
// let getsum=(num1,num2)=>{
    //     let sum = num1+num2;
    //     return sum
    // };// there is no name of function ,here getsum is variable name
    // console.log(getsum(1,2))


// a) Print odd numbers in an array

let oddNumber= (array1)=>{
    let odd=[];
    for(i=0;i<array1.length;i++){
        if(array1[i]%2==1){
         odd.push(array1[i])
        }
    }console.log(odd)
};
oddNumber([5,9,6,2,7,3,1,19,11]);

// output-->[5, 9, 7, 3, 1, 19, 11]

// b)Convert all the strings to title caps in a string array

let toTitleCaps=(str)=>{
    str=str.toLowerCase().split(" ");
for(var i=0; i<str.length; i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
console.log(str.join(" "));
};
toTitleCaps("hoNesty is the best policy");

// output-->Honesty Is The Best Policy

// c) Sum of all numbers in an array

let totalSum=(arr)=>{
    let sum=0;
    for (var i in arr){
        sum=sum+arr[i]
    }
    console.log(`Sum of all numbers in an array is : ${sum}`)
};
totalSum([2,3,4,5,6,8,10]);

// output-->38

// d) Return all the prime numbers in an array

let primeArray= (array)=>{
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
primeArray([8,19,56,45,47,67,54]);

// output-->[19, 47, 67]

// e) Return all the palindromes in an array

let palindromeArray= (arr)=>{
    let palindromeArr=[];
for(let i=0;i<arr.length;i++){
    let reverseArr=arr[i].toString().split("").reverse().join("")
    if(reverseArr==arr[i]){
        palindromeArr.push(arr[i])}
}
console.log(palindromeArr);
};
palindromeArray(["cac","civic","ayush",121]);

// output-->['cac', 'civic', 121]
