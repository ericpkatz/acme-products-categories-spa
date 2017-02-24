import $ from 'jquery';

import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

let categories = [
  { name: 'sports', products: [ { name: 'tennis raquet'} ]},
  { name: 'clothing', products: [
    { name: 'T-shirt'},
    { name: 'Pants'}
  ]},
];

let idx = 0;


const onCategorySave = (name)=> {
  categories.push({ name: name, products: [] });
  idx = categories.length - 1;
  categoryListRender();
  showCategoryDetails();
};

const onProductSave = (name)=> {
  console.log(name);
  categories[idx].products = categories[idx].products || [];
  categories[idx].products.push({ name: name });
  showCategoryDetails();
};

const productFormRender = ()=> {
  ProductForm('#productForm', '', categories[idx], onProductSave);
}

const productListRender = ()=> {
  ProductList('#productList', categories[idx]);
};



const showCategoryDetails = ()=> {
  console.log(`load details for ${categories[idx].name}`);
  productFormRender();
  productListRender();
};

const onCategorySelect = (_idx)=> {
  idx = _idx;
  categoryListRender();
  showCategoryDetails();
}

const onCategoryDelete = (_idx)=> {
  categories = categories.filter((category, _idx)=> _idx !== idx); 
  idx = 0; 
  categoryListRender();
  showCategoryDetails();
}

const categoryListRender = ()=> {
  CategoryList(
      '#categoryList',
      categories,
      idx,
      onCategorySelect,
      onCategoryDelete
  );
}

CategoryForm('#categoryForm', '', onCategorySave); 
categoryListRender();
showCategoryDetails();
