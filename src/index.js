import $ from 'jquery';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';


const categoryForm = new CategoryForm((name)=> {
  categories.push({ name: name });
  categoryList.render(categories, categories.length - 1);
  categoryForm.render('');

});

const showCategoryDetails = (idx)=> {
  console.log(`load details for ${categories[idx].name}`);
}

const categoryList = new CategoryList(
    (idx)=> {
      categoryList.render(categories, idx);
    },
    (idx)=> {
      categories = categories.filter((category, _idx)=> _idx !== idx); 
      categoryList.render(categories, 0);
    }
);

let categories = [
  { name: 'sports'},
  { name: 'clothing'},
];

categoryList.render(categories, 0);
showCategoryDetails(0);
