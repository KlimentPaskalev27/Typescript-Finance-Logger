import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    // the item type can either be Payment or Invoice, so use their common interface to set the type expected
    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading; // make the h4 whatever text we pass in the render method
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if( pos === 'start' ) {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}