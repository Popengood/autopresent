namespaced: true;

export const state = () => ({
  goods: [],
});

export const mutations = {
  setGoods(state, payload) {
    state.goods = [...payload];
  },
};

export const actions = {
  setLocalStorage({ commit }, goods) {
    localStorage.setItem('cart', JSON.stringify(goods));
    commit('setGoods', goods);
  },
};

export const getters = {
  fetchQuantity: state => {
    return state.goods.reduce((accum, item) => accum + item.quantity, 0);
  },
  fetchTotal: state => {
    return state.goods.reduce(
      (accum, item) => accum + item.price * item.quantity,
      0
    );
  },
};
