import e from "express"

export function addnums(a,b){
    return a+b  
};

export function subnums(a,b){
    return a+b
};


export function divnums(a,b){
    return a/b
};

export function mulnums(a,b){
    return a*b
};

export function listnums(nums){
   let i = 0
   let sum = 0
    while (i < nums.length){
        sum += nums[i]
        i++
        
    }
    return sum
};

export function printForward(nums){
   
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
    }
};

export function printBackword(nums){
    
    for (let i = nums.length-1 ; i >= 0; i--) {
        console.log(nums[i])
    }

};