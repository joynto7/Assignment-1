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

// problem-3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number"
{
    if(typeof value === "string"){
        return "String";
    }else{
        return "Number";
    }

}


// problem 4

function getProperty<T,K extends  keyof T>(obj: T, key:K): T[K]{
    return obj[key];
}


