const pool = require('~/server/config');

export const state = () => ({
  brands: [],
});

export const mutations = {
  setBrands(state, payload) {
    state.brands = [...payload];
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const query =
      'SELECT id, url, name, parent, description FROM `tbl_menu` WHERE `parent` != "inform" and `parent` != "addinform" and `status` = 1 ORDER BY position';
    await pool
      .promise()
      .query(query)
      .then(([rows]) => commit('setBrands', rows))
      .then(() => pool.end())
      .catch(err => console.log(err));
  },
};

export const getters = {
  fetchBrands: state => parent => {
    return state.brands.filter(brand => brand.parent === parent);
  },
  fetchBrand: state => url => {
    console.log('fetchBrand');
    return state.brands.find(brand => brand.url === url);
  },
};
