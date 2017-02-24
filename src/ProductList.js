import $ from 'jquery';

const render = (containerId, category)=> {
  const container = $(containerId);
  container.html(`${category.products.length} Products`);
};

export default render;
