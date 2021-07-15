export default ({ store, params, error }) => {
  setTimeout(() => {
    const validate = store.state.aside.brands.some(
      brand => brand.url === params.model
    );
    if (!validate) {
      return error({ status: 404 });
    }
  }, 50);
};
