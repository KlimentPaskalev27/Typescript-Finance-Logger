import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js'; //import from .js because the compiler will compile to .js. It wont compile .ts into .js
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// when the form is submitted, call a callback function of type Event
form.addEventListener('submit', (e) => {
    // prevent page from refreshing
    e.preventDefault();
    let values; // specify tuple to expect in these positions these data types
    values = [tofrom.value, details.value, amount.valueAsNumber]; // initialise tuple with form values
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values); // ...spread operator separates array
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
