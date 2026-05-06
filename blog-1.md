
# Generics in TypeScript


## Introduction:
 
  Generics is a powerful feature in TypeScript. This feature ensures type consistency and compile-time type safety.This allow us to build reuseable contents and function that remain strictly type,no matter what type of data structures are passed in.  

 There are two closely realated  types " any " and " unknown " in TypeScript. While they may seem simillar but their behavior and impact on code safty are signnificantly different.The type "any" disables TypeScript's  type system for given Variable .when a value typed as "any" the complier allows all operations on it without validation .For Example : 

  `let value: any = " Hello World ";`
  `value.toFixed(2);// no runtime error`

  according to this code there should be an error."value" is a string but toFixed() is a fucntion for number only. This leads to a runtime error.On the other hand type " Unknown is much safer than any it verify the type. 

 `let value: unknown = " Hello World ";`
  `value.toFixed(2);//  runtime error`

  Type narrowing means check a value's type before using it , so TypeScripts can safely allow operations.

  `let value: unknown = "Hello"`
  `if(typeof value === "String" ){console.log(value.toUppercase());}`
  
  Here is safely understand the type and No run time error.

## Conculsion

So Type narrowing means defines the exact type so that complier do not make any mistake. 
   
  

