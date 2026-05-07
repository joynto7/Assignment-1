

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}



function reverseString(str: string): string{
    let resversed = "";
    for(let i = str.length -1; i>= 0; i--){

        resversed = resversed + str[i];
    }
    return resversed;
}



type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number"
{
    if(typeof value === "string"){
        return "String";
    }else{
        return "Number";
    }

}




function getProperty<T,K extends  keyof T>(obj: T, key:K): T[K]{
    return obj[key];
}



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
        return "Name: " + this.name + ", Age: " + this.age + ", Grade: " +this.grade ; 
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



