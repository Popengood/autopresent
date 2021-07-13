export default ({ store, params, redirect }) => {
  setTimeout(() => {
    const validate = store.state.aside.brands.some(
      brand => brand.parent === params.brand
    );
    if (!validate) {
      return redirect('/error');
    }
  }, 50);
};
