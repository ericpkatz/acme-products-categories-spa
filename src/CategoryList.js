import $ from 'jquery';

const render = (containerId, categories, idx, onSelect, onDelete) => {
  const container = $(containerId);
  container.empty();
  const template = (category, active)=> `
      <li class='list-group-item${active ? ' list-group-item-success' : ''}'>
        <a>${category.name}</a>
        <button style='float:right' class='btn btn-danger'>Delete</button>
        <br clear='all' />
      </li>
    `;
  const ul = $('<ul />').addClass('list-group');
  container.append(ul);
  categories.forEach((category, _idx)=> {
    ul.append($(template(category, _idx === idx)));
  });
  $('a', container).on('click', function(){
    onSelect($(this).parent().index());
  }); 
  $('button', container).on('click', function(){
    onDelete($(this).parent().index());
  }); 
};

export default render;
