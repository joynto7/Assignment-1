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


// problem-5
interface Book {
    title:String;
    author:String;
    publishedYear:Number;
}

function toggleReadStatus(book:Book){
    let updatedBook ={
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        isRead: true,
    };
    
    return updatedBook;
}

// problem-6
class Person {
    name:string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade:string;

    constructor(name:string, age: number, grade:string){
        super(name,age);
        this.grade = grade;
    }

    getDetails(): string{
        return "Name:" + this.name + ", Age: " + this.age + ", Grade:" +this.grade ; 
    }
}


// problem 7

function getIntersection(a:number[], b:number[]): number[]{
    const result: number[] = [];
    for(let i = 0; i<a.length; i++){
        for(let j = 0; j<b.length; j++){
            if(a[i] === b[j]){
                result[result.length] = a[i];
                break;
            }
        }
    }
    return result;
}



