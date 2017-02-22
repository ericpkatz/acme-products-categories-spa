import $ from 'jquery';

export default class CategoryForm{
  constructor(onSave){
    this.cfInputName = $('#cfInputName');
    this.cfCreateButton = $('#cfCreateButton');
    this.cfCreateButton.on('click', ()=> {
      onSave(this.cfInputName.val());
    });
  }
  render(name){
    this.cfInputName.val(name);
  }
}
