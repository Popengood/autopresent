<template>
  <div class="w100p">
    <h1>Оформление заказа</h1>
    <OrderInfoBook v-if="this.source === 'book'" :dataBook="dataBook" />
    <OrderInfoCart v-else-if="this.source === 'cart'" :dataBook="dataBook" />

    <div class="flex white-box">
      <form id="form_order" class="form" novalidate="true">
        <div class="form-row">
          <label><span>*</span> Способ доставки:</label>
          <select
            id="delivery"
            v-model="delivery"
            name="delivery"
            class="form-control form-control_select"
          >
            <option value="Почтовое отправление">Почтовое отправление</option>
            <option value="Курьерская доставка">Курьерская доставка</option>
          </select>
        </div>
        <div class="form-row">
          <label><span>*</span> Фамилия Имя Отчество: </label>
          <input
            id="username"
            v-model="username"
            type="text"
            name="username"
            class="form-control"
            maxlength="120"
          />
        </div>
        <div class="form-row">
          <label><span>*</span> Почтовый индекс:</label>
          <input
            id="post_index"
            v-model="postIndex"
            type="text"
            name="postIndex"
            class="form-control form-control_index"
            maxlength="6"
          />
        </div>
        <div class="form-row">
          <label>Область, край, район:</label>
          <input
            id="areal"
            v-model="areal"
            type="text"
            name="areal"
            class="form-control"
            maxlength="120"
          />
        </div>
        <div class="form-row">
          <label><span>*</span> Населённый пункт:</label>
          <input
            id="locality"
            v-model="locality"
            type="text"
            class="form-control"
            name="locality"
            maxlength="60"
          />
        </div>
        <div class="form-row">
          <label><span>*</span> Улица, дом, корпус, квартира:</label>
          <input
            id="adress"
            v-model="adress"
            type="text"
            class="form-control"
            name="adress"
            maxlength="120"
          />
        </div>
        <div class="form-row">
          <label><span>*</span> Телефон (мобильный):</label>
          <input
            id="tel"
            v-model="tel"
            type="tel"
            class="form-control"
            name="tel"
            maxlength="50"
          />
        </div>
        <div class="form-row">
          <label>Электронный адрес:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            class="form-control"
            maxlength="30"
          />
        </div>
        <div class="form-row">
          <label class="label-comment">Ваши комментарии:</label>
          <textarea
            id="comment"
            v-model="comment"
            class="form-control form-control_textarea"
            name="comment"
          />
        </div>
        <div class="form-row">
          <label></label>
          <button type="submit" class="btn btn-success">Отправить заказ</button>
        </div>
      </form>
      <div class="form-text">
        <p>Поля отмеченные звёздочкой обязательны для заполнения.</p>
        <p>Доставка курьером возможна только по Санкт-Петербургу.</p>
        <p>
          Прежде чем отправить заказ, подумайте, уверены ли Вы в своих
          возможностях и желании выкупить его.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery: 'Почтовое отправление',
      username: '',
      postIndex: '',
      areal: '',
      locality: '',
      adress: '',
      tel: '',
      email: '',
      comment: '',
      dataBook: '',
      source: this.$nuxt._route.query.source,
    };
  },
  components: {
    OrderInfoBook: () => import('~/components/books/orderInfoBook'),
    OrderInfoCart: () => import('~/components/service/orderInfoCart'),
  },
  mounted() {
    if (this.source === 'book' || this.source === 'cart') {
      this.dataBook = JSON.parse(localStorage.getItem('databook'));
    } else {
      this.$nuxt.error({ statusCode: 404 });
    }
  },
};
</script>
