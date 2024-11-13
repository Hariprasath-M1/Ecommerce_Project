function productReducer(state, action) {
  switch (action.type) {
    case "addProduct":
      return action.payload;
    case "search":
      return action.payload.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.searchText)
      );
    case "filter":
      return action.payload.products.filter(product =>
        product.category === action.payload.filterValue
      );
    case "sort":
      const sortedProducts = [...action.payload.products];
      switch (action.payload.sortValue) {
        case "a-z":
          return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        case "z-a":
          return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        case "h-l":
          return sortedProducts.sort((a, b) => b.price - a.price);
        case "l-h":
          return sortedProducts.sort((a, b) => a.price - b.price);
        default:
          return state;
      }
    default:
      return state;
  }
}

export default productReducer;
