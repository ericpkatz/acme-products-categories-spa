import $ from 'jquery';

export default class CategoryList{
  constructor(onSelect, onDelete){
    this.list = $('#clList');
    this.list.on('click', 'a', function(){
      onSelect($(this).parent().index());
    });
    this.list.on('click', 'button', function(){
      onDelete($(this).parent().index());
    });

  }
  render(categories, idx){
    this.list.empty();
    const template = (category, active)=> `
        <li class='list-group-item${active ? ' list-group-item-success' : ''}'>
          <a>${category.name}</a>
          <button style='float:right' class='btn btn-danger'>Delete</button>
          <br clear='all' />
        </li>
      `;
    categories.forEach((category, _idx)=> {
      this.list.append($(template(category, _idx === idx)));
    }, this);
  }
}
