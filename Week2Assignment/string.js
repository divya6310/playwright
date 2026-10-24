str = "Hello World"
let words = str.split(" ")
console.log(words[words.length-1].length)


stri = "fly me to the moon "
strin = stri.trim()
console.log(strin)
let arr1 = strin.split(" ")
console.log(arr1)
console.log(arr1[arr1.length-1].length)
 

function isAnagram(str1,str2)
{
    return str1.toLowerCase().split('').sort().join('') ===
    str2.toLowerCase().split('').sort().join('')
}

console.log(isAnagram('listen','Silent'))
console.log(isAnagram('Hello','World'))