# OOP in TypeScipts

## Introduction:
In every programming language OOP(Object Oriented Programming) is a very important concept. Each feature deals with diffrent problem. Now we will exploe the importance of OOP and how these scale, reduce the big projects complexity and why we use it.

### Encapsulation

Encapsulation is about hiding internal state and exposing only what's necessary.The key points are:

1) Prevents accidental misuse of data
2) Keeps logic localized
3) Maked Debugging easier

For Exmaple:

Class BankAccount {
   private balance: number;
   constractor(intialBalance: number){
       this.balance = initialBalance;
   }
   deposite(amount: number ){
       if(amount > 0) this.balance += amount;
   }
   getBalance(){
       return this.balance;
   }

Here No One can Directly access on account.balance.

### Abstraction

Abstraction means shows only what the user needs,hiding how it works internally.Here is a exaple for demonstrate:

 abstract class flower{
   abstract smell():void;
   abstract color():void;
   abstract temarature():void
 }

 class rose extends flower{
    smell(): void {
        console.log('Good Smell');
        
    }
    color(): void {
        console.log('red');   
    }
    temarature(): void {
        console.log('slightly clod');
    }

 }

Here under abstract class "Flower" ther are Three abstract Classes. Users will not see these classes.

### Inheritance

Inheritance allows you to extend logic instead of duplicating or copying it. Here is a example:

 class Animal {
    name:string;
    sound:string;

    //Constructor
    constructor(name:string, sound:string){
        this.name = name ;
        this.sound =sound ;
    }

    // methods
     makeSound(){
        console.log(`${this.name} is making ${this.sound}`);
     }

 }

 class indianDog extends Animal{
    bark(){
        console.log(" abe shale ");
    }
 }

acoording to this code:
1) It reduces code Duplication
2) Creates Logical Hierarchy
3) Makes systems easier to expand

# Polymorphism

Polymorphism allows different to be used through the same interface.

   class person {
      name: string;
      age: number;
      colour: string;
      address: string;
   }
  
      constructor( name:string,age:number,colour:string,address:string ){
          this.name = name ;
          this.age = age ;
          this.colour = colour ;
          this.address = address ;
      }
  
      getInfo(){
          console.log(`${this.name} is Good      Person. Her age is ${this.age}`);
      }
      
      listenMusic(){
          console.log(`${this.name} listens music in Free time. ${this.name} likes many music`);
      }
      watchMovie(){
          console.log(`${this.name} watches movie and Action Moives like much more than any other movie`);
  
      }
  
   

According to code it enables flexiability , Eliminates If-else  or switch logic.


# Conculsion 

OOP is the major concept for any programming language and for big world class project. we have to rememeber

1) Encapsulation -> Protects Data
2) Abstraction -> Simiplifies  usage
3) Inheritance -> Promotes reuse
4) Polymorphism -> enables flexibility

The End !!!!









