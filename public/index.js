import Invoice from './components/invoice.js';
import ListTemplate from './components/listTemplate.js';
import Payment from "./components/payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, 'end');
    }
    else if (type.value === 'payment') {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, 'end');
    }
});
