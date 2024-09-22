// reverse string
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('Apple'))

//palindrome
const isPalindrome = (str) => str === reverseString(str);
console.log(isPalindrome('abba'))
console.log(isPalindrome('rock'))

//reverse int
const reverseInt = (num) => {
    const intString = num.toString();
    console.log({ num, intString })
    return parseInt(reverseString(intString)) * Math.sign(num)
}

console.log(reverseInt(-1234))

//capitalize
const capitalize = str =>
    str.toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')


console.log(capitalize('hello world'))

//FizzBuzz
const fizzbuzz = (n) => {
    for(let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz - ${i}`)
        }
        else if (i % 3 === 0) {
            console.log(`Fizz - ${i}`)
        }
        else if (i % 5 === 0) {
            console.log(`Buzz - ${i}`)
        } 
        else {
            console.log(i)
        }
    }
}

// fizzbuzz(100)


// MaxPROFIT

const maxProfit = (arr) => {
    const sell = {}
    arr.forEach((item, index) => {
        sell[item] = {
            next: arr[index + 1],
            index
        }
    });

    let bestResult = null;
    let index = null;
    const keys = Object.keys(sell);
    keys.forEach(k => {
        const diff = sell[k].next - k;
        if (diff > bestResult) {
            bestResult = diff;
            index = sell[k].index
        }
    })

    return index;
}

const stocks = [7,1,5,3,6,4];
console.log(maxProfit(stocks))

// CHUNK
const chunkIt = (arr, length) => {
    const result = [];

    while(arr.length) {
        result.push(arr.splice(0, length));
    }
    return result;
}

console.log(chunkIt([1,2,3,4,5,6,7,8], 3))


//TwoSum
const twoSum = (arr, target) => {   
    const map = {};
    let pair = null
    arr.forEach((item, index) => {
        const targetVal = target - item;
        const pairIndex = arr.findIndex(i => i === targetVal);
        if (pairIndex > -1) {
            pair = [index, pairIndex]
            return;
        } else {
            map[item] = {
                index,
                pairIndex
            }
        }
        
    });

    console.log(map)
    return pair;
}

console.log(twoSum([2,7,11,15], 9))

console.log(twoSum([1,3,7,9,2], 11))