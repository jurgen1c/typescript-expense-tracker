import hasFormat from './components/hasFormat';
import Invoice from './components/invoice.js';
import ListTemplate from './components/listTemplate.js';
import Payment from "./components/payment.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormat;
  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
  }else if (type.value === 'payment'){
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
  }
})