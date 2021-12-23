(function() {
  'use strict';

  class Gallery {
    static defaults = {
      margin: 20,
      visibleItems: 5,
      border: 0,
      responsive: false,
      autoScroll: false,
      interval: 3000,
      nav: true,
      dots: false,
      keyControl: false,
      animated: false,
      baseTransition: 0.4,
      delayTimer: 250,
      limit: 30,
    };
    static LEFT = 37;
    static RIGHT = 39;

    constructor(gallery) {
      this.gallery = gallery;

      this.slider = this.gallery.querySelector('.slider');
      this.stage = this.gallery.querySelector('.stage');
      this.items = this.gallery.querySelectorAll('.stage > div');
      this.count = this.items.length;

      this.current = 0;
      this.next = 0;
      this.pressed = false;
      this.start = 0;
      this.shift = 0;

      this.init();
    }

    init() {
      this.options = Gallery.defaults;
      this.setSizeCarousel();
      this.setCoordinates();
      this.initControl();
      if (this.events) return;
      this.registerEventsHandler();
    }

    setSizeCarousel() {
      this.widthSlider = this.slider.offsetWidth;
      if (this.options.responsive) this.setAdaptiveOptions();
      this.max = this.count - this.options.visibleItems;
      const width =
        (this.widthSlider -
          this.options.margin * (this.options.visibleItems - 1)) /
        this.options.visibleItems;

      this.width = width + this.options.margin;
      this.widths = this.width * this.count;
      this.stage.style.width = this.widths + 'px';
      for (let item of this.items) {
        item.style.cssText = `width:${width}px; margin-right:${this.options.margin}px;`;
      }
      setTimeout(() => {
        this.gallery.style.visibility = 'visible';
      }, 300);
    }

    setCoordinates() {
      let point = 0;
      this.coordinates = [];

      while (this.coordinates.length < this.count) {
        this.coordinates.push(point);
        point -= this.width;
      }
    }

    initControl() {
      this.navCtrl = this.gallery.querySelector('.nav-ctrl');
      this.dotsCtrl = this.gallery.querySelector('.dots-ctrl');

      if (this.options.nav === true) {
        this.btnPrev = this.navCtrl.querySelector('[data-shift=prev]');
        this.btnNext = this.navCtrl.querySelector('[data-shift=next]');
        this.setNavStyle();
        this.navCtrl.dataset.hidden = false;
      } else {
        this.navCtrl.dataset.hidden = true;
      }

      if (this.options.dots === true) {
        this.creatDotsCtrl();
        this.dotsCtrl.dataset.hidden = false;
      } else {
        this.dotsCtrl.dataset.hidden = true;
      }
    }

    setAdaptiveOptions() {
      const width = document.documentElement.clientWidth;
      const points = [];
      let point;

      for (let key in this.options.adaptive) {
        points.push(key);
      }

      for (let i = 0, j = points.length; i < j; i++) {
        let a = points[i],
          b = points[i + 1] !== undefined ? points[i + 1] : points[i];

        if (width <= points[0]) {
          point = points[0];
        } else if (width >= a && width < b) {
          point = a;
        } else if (width >= points[points.length - 1]) {
          point = points[points.length - 1];
        }
      }

      const setting = this.options.adaptive[point];
      for (let key in setting) {
        this.options[key] = setting[key];
      }
    }

    setNavStyle() {
      this.btnPrev.classList.remove('disable');
      this.btnNext.classList.remove('disable');

      if (this.current == 0) {
        this.btnPrev.classList.add('disable');
      } else if (this.current >= this.count - this.options.visibleItems) {
        this.btnNext.classList.add('disable');
      }
    }

    creatDotsCtrl() {
      this.spots = [];
      this.dotsCtrl.innerHTML = '';

      const li = document.createElement('li');
      let i = 0,
        point = 0,
        clone;

      while (i < this.count) {
        clone = li.cloneNode(true);
        this.dotsCtrl.appendChild(clone);
        this.spots.push(clone);

        i += this.options.visibleItems;
        point =
          i <= this.max
            ? point - this.width * this.options.visibleItems
            : -this.width * this.max;
      }
      this.setDotsStyle();
    }

    setDotsStyle() {
      for (let spot of this.spots) {
        spot.classList.remove('active');
      }
      const i =
        this.next < this.max
          ? Math.trunc(this.next / this.options.visibleItems)
          : this.spots.length - 1;
      this.spots[i].classList.add('active');
    }

    registerEventsHandler(e) {
      window.addEventListener('resize', this.resize.bind(this));
      if (this.options.autoScroll) {
        setInterval(() => this.autoScroll(), this.options.interval);
      }
      this.navCtrl.addEventListener('click', this.navControl.bind(this));
      this.dotsCtrl.addEventListener('click', this.dotsControl.bind(this));
      this.gallery
        .querySelector('.slider')
        .addEventListener('click', this.showPhoto.bind(this));
      this.gallery
        .querySelector('.slider')
        .addEventListener('wheel', this.wheelControl.bind(this));
      this.events = true;
    }

    resize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.init();
        this.current = this.current <= this.max ? this.current : this.max;
        let x = this.coordinates[this.current];
        this.scroll(x, this.options.baseTransition);
      }, this.options.delayTimer);
    }

    autoScroll(e) {
      const x = this.getNextCoordinates(1);
      this.scroll(x, this.options.baseTransition);
    }

    navControl(e) {
      if (e.target.tagName != 'SPAN') return;
      const d = e.target.dataset.shift === 'next' ? 1 : -1;
      const x = this.getNextCoordinates(d);
      this.scroll(x, this.options.baseTransition);
    }

    dotsControl(e) {
      if (e.target.tagName != 'LI' || e.target.classList.contains('active'))
        return;

      const i = this.spots.indexOf(e.target);
      if (i == -1) return;

      this.next = i * this.options.visibleItems;
      this.next = this.next <= this.max ? this.next : this.max;
      const x = this.coordinates[this.next];
      const n = Math.abs(this.current - this.next);
      const t = this.options.baseTransition + n * 0.07;

      this.scroll(x, t);
    }

    wheelControl(e) {
      e.preventDefault();
      const d = e.deltaY > 0 ? 1 : -1;
      const x = this.getNextCoordinates(d);
      this.scroll(x, this.options.baseTransition);
    }

    // просмотр полноразмерной фотографии
    showPhoto(e) {
      let target = e.target;
      if (target.tagName != 'IMG') return;
    }

    getNextCoordinates(direction) {
      if (typeof direction !== 'number') return this.coordinates[this.current];

      // direction - направление перемещения: -1 - left, 1 - right
      if (
        this.options.autoScroll &&
        this.current >= this.count - this.options.visibleItems
      ) {
        this.next = 0;
      } else {
        if (
          (this.current == 0 && direction == -1) ||
          (this.current >= this.max && direction == 1)
        )
          return;
        this.next += direction;
      }
      return this.coordinates[this.next];
    }

    scroll(x, transition) {
      if (typeof x !== 'number') return;

      this.stage.style.cssText = `width:${this.widths}px; height:${this.items[0].offsetHeight}px; transform:translateX(${x}px); transition:${transition}s`;
      this.current = this.next < this.max ? this.next : this.max;

      if (this.options.nav) this.setNavStyle();
      if (this.options.dots) this.setDotsStyle();
    }
  }
  const galleries = document.querySelectorAll('.gallery');
  for (let gallery of galleries) {
    const slider = new Gallery(gallery);
  }
})();
