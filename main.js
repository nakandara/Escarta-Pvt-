const routes = require("./routes/index")
const EventEmitter = require('node:events');
var bodyParser = require('body-parser')
const myEmitter = new EventEmitter();
const express = require('express');
const { log } = require('node:console');
const connectDB = require("./database/db")


myEmitter.on('event', function firstListener(data) {
    console.log(`Helloooo! first listener ${data}`);
    console.log(data)
});



const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(routes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running port on port ${port}`)
    })
})


// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let charSet = new Set();
//     console.log(charSet);
//     let left = 0;
//     let right = 0;
//     console.log(s.length, "555555555555");
//     while (right < s.length) {
//         console.log(s.charAt(right), "hhhhhhhhhh");
//         console.log(charSet.has(s.charAt(right)), "llllllll");
//         if (!charSet.has(s.charAt(right))) {
//             charSet.add(s.charAt(right));
//             right++;
//             console.log(charSet.size, "ooooooooooooooo");
//             maxLength = Math.max(maxLength, charSet.size);
//         } else {
//             charSet.delete(s.charAt(left));
//             left++;
//         }
//     }

//     console.log(maxLength, "rrrrrrrr");
//     return maxLength;
// }

// lengthOfLongestSubstring("llvol")


// let arr = ["apple", "banana", "orsssssssssange", "watermelon", "grapefruit"];

// let longestWord = arr[0];
// console.log(longestWord);

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longestWord.length) {
//         longestWord = arr[i];
//     }
// }

// console.log("The longest word is: " + longestWord);

// let objList = [
//     { name: "apple", size: 3 },
//     { name: "baxvvjbvnana", size: 6 },
//     { name: "orange", size: 5 },
//     { name: "watermelon", size: 10 },
//     { name: "grapefruit", size: 9 }
// ];

// let longestName = objList[0].name;
// console.log(longestName);

// for (let i = 1; i < objList.length; i++) {
//     if (objList[i].name.length > longestName.length) {
//         longestName = objList[i].name;
//     }
// }

// console.log("The longest name is: " + longestName);