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
  async loadState({ commit }) {
    const query =
      'SELECT id, url, name, parent FROM `tbl_menu` WHERE `parent` != "inform" and `parent` != "addinform" and `status` = 1 ORDER BY position';
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
    return state.brands.filter(brand => {
      return brand.parent === parent;
    });
  },
  fetchBrand: state => url => {
    return state.brands.filter(brand => {
      return brand.url === url;
    });
  },
};
