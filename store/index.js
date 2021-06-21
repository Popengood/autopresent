import pool from '~/server/config';

export const state = () => ({
  brands: [],
});

export const mutations = {
  setBrands(state, payload) {
    state.brands = [...payload];
    console.log('state.brands.mutation=', state.brands);
  },
};

export const actions = {
  async loadStateBrands({ commit }) {
    await pool
      .promise()
      .query('SELECT * FROM `tbl_menu` WHERE `parent` = "leftmenu" LIMIT 2')
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
  fetchBrands: state => {
    console.log('state.brands.getters=', state.brands);
    return state.brands.length != undefined ? state.brands : [];
  },
};
