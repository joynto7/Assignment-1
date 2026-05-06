// Problem-1

function filterEvenNumbers(numbers: number[]): number[] {
    const evenNumbers: number[] = [];
    for(let i =0 ; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers[evenNumbers.length] = numbers[i];
        }  
    }
     return evenNumbers;
}

// problem-2

function reverseString(str: string): string{
    let resversed = "";
    for(let i = str.length -1; i>= 0; i--){

        resversed = resversed + str[i];
    }
    return resversed;
}


