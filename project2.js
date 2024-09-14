// function countOcuurences (word, ...comments){
//     let count=0;
//     word=word.trim().toLowerCase();
//     for (let comment of comments){
//         comment= comment.trim().toLowerCase();
//         let words= comment.split(' ');
//         for (let singleword of words){
//             if (word===singleword){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// let UserInput= prompt("enter your comments")
// let userInputArray= UserInput.split(',');
// let inputWord= prompt('write the word')
// let result= countOcuurences(...userInputArray, inputWord );
// alert(`the occurance of the word "${inputWord}" is ${result} times`)