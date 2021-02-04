import hasFormat from "./hasFormat.js";

export default class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: hasFormat, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;

    const p = document.createElement('p');
    p.innerText = item.format();

    li.append(h4);
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    }else {
      this.container.append(li);
    }
  }
}