export default ({ store, params, redirect }) => {
  setTimeout(() => {
    const validate = store.state.aside.brands.some(
      brand => brand.url === params.model
    );
    if (!validate) {
      return redirect('/error');
    }
  }, 50);
};
