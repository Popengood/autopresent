<template>
	<div class="wrapper">
		<app-header />
    <div class="flex container">
      <app-aside />
			<div class="container-error">
				<div class="white-box preview">
					<div class="error-box">
						<div class="text-row">страница не найдена</div>
						<span>404</span>
					</div>
					<h2>Возможно это случилось по одной из этих причин:</h2>
					<p>— Запрашиваемая страница никогда не существовала на нашем сайте или была удалена, так как информация размещённая на ней уже не актуальна;<br>
					— Вы ошиблись при наборе адреса страницы (URL);<br>
					— Страница не может отобразиться по техническим причинам.</p>

					<h2>Мы действительно хотим помочь Вам... Попробуйте:</h2>
					<p>— перейти на <nuxt-link to="/">ГЛАВНУЮ СТРАНИЦУ</nuxt-link> сайта - там Вы также сможете найти много полезной информации;<br>
					— вернуться назад при помощи кнопки браузера «BACK» (это такая стрелочка в верхнем левом углу);<br>
					— ещё раз написать адрес страницы.</p>
				</div>
			</div>
		</div>
    <app-footer />
	</div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/header/Header'),
    AppAside: () => import('~/components/aside/Asidemenu'),
    AppFooter: () => import('~/components/footer/Footer'),
  },
};
</script>

<style lang="scss" scoped>
.white-box {
  width: 600px;
	align-self: center;
	margin: 0 auto;
	padding: 30px 40px 29px;
}
.error-box {
	color: #d02c5e;
	text-align: center;
	text-transform: uppercase;
	.text-row {
		font-weight: 500;
		font-size: 30px;
	}
	span {
		font-weight: 700;
		font-size: 200px;
		line-height: 1;
	}
}
h2 {
	margin-top: 18px;
}
a {
	border-bottom: 1px solid #4e4420;
	&:hover {
		border-bottom-color: transparent;
	}
}
</style>
