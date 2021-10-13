//create a program that takes a list of any number of strings and will
//determine which words in the list are exact anagrams of each other (ignoring spaces)

var unsortedList = ['rope',
'pore',
'repo',
'red rum',
'murder',
'listen',
'silent',
'endeavour',
]

//first done without regex, and one of pairs was not recognised due to space, after adding regex this seems to be a solution

function groupAnagrams (inputList) {
    let cache = {};
    for (let str of inputList){
        let sortedKey = str.replace(/\s+/g, '').split('').sort().join('').toLowerCase();
        if (!cache[sortedKey]){
            cache[sortedKey] = [str]
        } else {
            cache[sortedKey].push(str)
        }
        //shorter version: (!cache[sortedKey]) ? cache [sortedKey] = [str] : cache[sortedKey].push(str);
    }
    return Object.values(cache);
};

console.log(groupAnagrams(unsortedList))

//optimisation example
// 'a'.charCodeAt() -97 // 0

function groupAnagrams2 (unsortedList) {
    let cache = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    for (let str of unsortedList){
        let Key = str.replace(/\s+/g, '').toLowerCase().split('').reduce((total, char) => total*primes[char.charCodeAt()-97],1);
        (!cache[Key]) ? cache [Key] = [str] : cache[Key].push(str);
    }
    return Object.values(cache);

};

console.log(groupAnagrams2(unsortedList))
