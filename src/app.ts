import { Payment } from './classes/Payment.js';
import {Invoice} from './classes/Invoice.js'; //import from .js because the compiler will compile to .js. It wont compile .ts into .js
import {HasFormatter} from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// when the form is submitted, call a callback function of type Event
form.addEventListener('submit', (e: Event) => {
    // prevent page from refreshing
    e.preventDefault();

    let values: [string, string, number]; // specify tuple to expect in these positions these data types
    values = [tofrom.value, details.value, amount.valueAsNumber]; // initialise tuple with form values

    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values); // ...spread operator separates array
    } else {
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');
    console.log(doc);
});