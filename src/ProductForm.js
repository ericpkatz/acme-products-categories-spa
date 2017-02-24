import $ from 'jquery';

const render = (containerId, name, category, onSave)=> {
  const container = $(containerId);
  container.empty();
  const template = `
  <div class='well'>
    <div class='form-group'>
      <input class='form-control' placeholder='add a new product to ${category.name}' value='${name}'/>
    </div>
      <button class='btn btn-primary'>Save</button>
  </div>
  `;

  container.html(template);
  $('.btn', container).on('click', ()=> {
    onSave($('input', container).val());
  });
};

export default render;

