import $ from 'jquery';

const render = (div, name, onSave)=> {
    const template = `
    <div class='well'>
      <div class='form-group'>
        <input class='form-control' placeholder='add a new category' value='${name}'/>
      </div>
        <button class='btn btn-primary'>Save</button>
    </div>
    `;
  const container = $(div);
  container.html(template);
  $('.btn', container).click(()=> onSave($('input', container).val()));
}
export default render;
