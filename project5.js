function filterEvenNumbers(...numbers){
    let evenNumberArray=[];
    for(let number of numbers){
        if(number%2===0){
            evenNumberArray.push(number);
        }
    }
    return evenNumberArray;
}
userInput= prompt('enter the numbers')
input=userInput.split(',').map(Number);
result=filterEvenNumbers(...input);
alert(result);