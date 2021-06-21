import app from '~/server/app';

const mysql = require('mysql2');

const config = {
  host: 'localhost',
  database: 'db_damyen_1',
  user: 'root',
  password: '',
};

const pool = mysql.createPool(config);

export const state = () => ({
  brands: [],
});

export const mutations = {
  setBrands(state, payload) {
    state.brands = [...payload];
  },
};

export const actions = {
  fetch({ commit }) {
    // app.get('', (req, res) => {
    pool
      .query('SELECT * FROM `tbl_menu` WHERE parent=`leftmenu` LIMIT 5')
      .then(res => {
        console.log('res=', res);
        commit('setBrands', res);
      })
      .catch(err => {
        console.log(err);
      });
    // });
  },
  /* fetch({ commit }) {
    pool.query(
      'SELECT * FROM `tbl_menu` WHERE parent=`leftmenu` LIMIT 5',
      (error, result) => {
        if (error) throw error;
        response.send(result);
      }
    );
  }, */
};

export const getters = {
  brands: state => {
    return state.brands.length != undefined ? state.brands : [];
  },
};
