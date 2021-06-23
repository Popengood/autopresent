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
  async loadStateBrands({ commit }) {
    await pool
      .promise()
      .query('SELECT * FROM `tbl_menu` WHERE `parent` = "leftmenu" LIMIT 2')
      .then(([rows]) => commit('setBrands', rows))
      .catch(err => console.log(err))
      .then(() => pool.end());
  },
};

export const getters = {};
