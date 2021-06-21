import pool from '~/server/config';

export const state = () => ({
  brands: [],
});

export const mutations = {
  setBrands(state, payload) {
    state.brands = [...payload];
  },
};

export const actions = {
  async fetch({ commit }) {
    await pool
      .promise()
      .query('SELECT * FROM `tbl_menu` WHERE `parent` = "leftmenu" LIMIT 5')
      .then(([rows]) => {
        commit('setBrands', rows);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => pool.end());
  },
};

export const getters = {
  brands: state => {
    return state.brands.length != undefined ? state.brands : [];
  },
};
