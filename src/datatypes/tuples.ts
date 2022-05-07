// ================== TUPLES ======================//
// Theory and exercise file - Not included in project

// The types of data in each position of the tuple is fixed once it's been initialised

//array
let arr = ['me', 25, true];
arr[0] = true; // allowed to change the type of the data at first position
arr = [25, true, 'me']; // can be reordered

//tuple
let tup: [string, number, boolean] = ['me', 25, true];
tup = [25, true, 'me']; // can't reorder
tup[0] = false; // can't change type
tup[0] = "newstring"; // can change value, same data type