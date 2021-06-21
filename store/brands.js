const pool = require('../server/config');
console.log('pool=', pool);

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
      .query('SELECT * FROM `tbl_menu` WHERE parent=`leftmenu` LIMIT 5')
      .then(res => {
        console.log('res=', res);
        commit('setBrands', res);
      })
      .catch(err => {
        console.log(err);
      });
  },
};

export const getters = {
  brands: state => {
    return state.brands.length != undefined ? state.brands : [];
  },
};
