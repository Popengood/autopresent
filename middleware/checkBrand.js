export default ({ error, store, params }) => {
  setTimeout(() => {
    const validate = store.state.aside.brands.some(
      brand => brand.parent === params.brand
    );
    if (!validate) {
      return error({ status: 404 });
    }
  }, 50);
};
