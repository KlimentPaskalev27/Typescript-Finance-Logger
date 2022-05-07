
// ================== GENERICS ================= //
// Theory and exercise file - Not included in project

// const addUID = (obj: object) => {   doesnt work, we cannot access properties of the object
// use <T> can be any letter but usually T, to capture the type that's passed in
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100 );
    return {...obj, uid};
}

let docOne = addUID({name: 'kliment', age: 25});

// below wont have access to .name if we used  //const addUID = (obj: object) => {
console.log(docOne.name);

// however, this "const addUID = <T>(obj: T) => {" allows us to pass in any type and not only object
let docTwo = addUID('hello');
// let's try to specify that it should be only object

const addUID2 = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100 );
    return {...obj, uid};
}
// now it expects only object types
let docThree = addUID2('hello');


// we can even specify that the object must have given properties
const addUID3 = <T extends {name:string, age:number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100 );
    return {...obj, uid};
}
// now it expects only object types
let docFour = addUID3({name: 4}); // name is number
let docFive = addUID3({name: "Kliment"}); // name is string, but no age




// =============== GENERICS with INTERFACES ==================== //
interface Resource<T> {
    uid: number;
    resourceName: string;
    // data is going to be whatever type we specify in the object where we apply this interface
    data: T;
}

const doc1 : Resource<string> = {
    uid: 1,
    resourceName: "person",
    data: "Klim"
}

const doc2 : Resource<object> = {
    uid: 2,
    resourceName: "personObj",
    data: { name:"Klim", age: 25 }
}

const doc3 : Resource<string[]> = {
    uid: 3,
    resourceName: "personNames",
    data: [ "First", "Surname"]
}
