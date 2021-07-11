export default ({ store, params, redirect }) => {
  console.log(
    `length=${store.getters['aside/fetchBrand'](params.model).length}`
  );
  if (store.getters['aside/fetchBrand'](params.model).length == 0) {
    return redirect('/error');
  }
};
